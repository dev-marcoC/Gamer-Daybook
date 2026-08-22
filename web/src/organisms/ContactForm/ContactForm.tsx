import { useState, type FormEvent } from "react";
import { useGameState } from "@/state/GameStateProvider";
import styles from "./ContactForm.module.scss";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { strings } = useGameState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (honeypot) return; // silently drop likely-bot submissions instead of showing an error

    setStatus("sending");
    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.honeypotField} aria-hidden="true">
        Website
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </label>

      <label className={styles.field}>
        {strings.contactForm.nameLabel}
        <input type="text" required value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <label className={styles.field}>
        {strings.contactForm.emailLabel}
        <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>

      <label className={styles.field}>
        {strings.contactForm.messageLabel}
        <textarea
          required
          rows={5}
          placeholder={strings.contactForm.messagePlaceholder}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button type="submit" className={styles.submitButton} disabled={status === "sending"}>
        {status === "sending" ? strings.contactForm.sendingButton : strings.contactForm.sendButton}
      </button>

      {status === "success" && <p className={styles.successMessage}>{strings.contactForm.successMessage}</p>}
      {status === "error" && <p className={styles.errorMessage}>{strings.contactForm.errorMessage}</p>}
    </form>
  );
}
