interface Env {
  RESEND_API_KEY: string;
  CONTACT_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
  ALLOWED_ORIGIN: string;
  CONTACT_RATE_LIMITER: RateLimit;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const requestOrigin = request.headers.get("Origin") ?? "";
    const corsHeaders = buildCorsHeaders(env.ALLOWED_ORIGIN, requestOrigin);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, corsHeaders);
    }

    // one IP can only fire a handful of submissions per minute, see wrangler.toml for the actual limit
    const clientIdentifier =
      request.headers.get("cf-connecting-ip") ?? "unknown";
    const rateLimitResult = await env.CONTACT_RATE_LIMITER.limit({
      key: clientIdentifier,
    });
    if (!rateLimitResult.success) {
      return jsonResponse({ error: "Too many requests" }, 429, corsHeaders);
    }

    let payload: ContactPayload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON" }, 400, corsHeaders);
    }

    const validationError = validatePayload(payload);
    if (validationError) {
      return jsonResponse({ error: validationError }, 422, corsHeaders);
    }

    const emailResponse = await sendContactEmail(env, payload);

    if (!emailResponse.ok) {
      return jsonResponse(
        { error: "Could not deliver the message" },
        502,
        corsHeaders,
      );
    }

    return jsonResponse({ success: true }, 200, corsHeaders);
  },
};

function buildCorsHeaders(
  allowedOrigins: string,
  requestOrigin: string,
): HeadersInit {
  const allowList = allowedOrigins.split(",").map((origin) => origin.trim());
  const matchedOrigin = allowList.includes(requestOrigin)
    ? requestOrigin
    : allowList[0];

  return {
    "Access-Control-Allow-Origin": matchedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function jsonResponse(
  body: unknown,
  status: number,
  corsHeaders: HeadersInit,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function validatePayload(payload: ContactPayload): string | null {
  if (!payload.name || payload.name.trim().length < 2)
    return "Name is too short";
  if (!payload.email || !payload.email.includes("@"))
    return "Email looks invalid";
  if (!payload.message || payload.message.trim().length < 10)
    return "Message is too short";
  return null;
}

// reply_to is the visitor's address, so replying to the notification email goes straight back to them
async function sendContactEmail(
  env: Env,
  payload: ContactPayload,
): Promise<Response> {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      reply_to: payload.email,
      subject: `GamerDaybook — new message from ${payload.name}`,
      text: payload.message,
    }),
  });
}
