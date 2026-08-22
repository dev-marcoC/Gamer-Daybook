import { useEffect, useRef } from "react";
import styles from "./StarfieldBackground.module.scss";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  baseOpacity: number;
  colorRgb: string;
  shape: "circle" | "diamond";
  twinkleSpeed: number;
  twinklePhase: number;
}

const violetRgb = "139,124,250";
const goldRgb = "227,177,82";

// most particles are plain drifting dots; a small share are bigger gold "glints"
// (diamond-shaped, brighter, twinkling) as a nod to dice on a game box
function createParticles(width: number, height: number): Particle[] {
  const count = Math.min(90, Math.floor((width * height) / 20000));
  return Array.from({ length: count }, () => {
    const isGlint = Math.random() < 0.16;
    const depth = Math.random();
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: isGlint ? 2 + depth * 1.6 : 0.5 + depth * 1.7,
      speedY: (isGlint ? 0.05 : 0.03) + depth * 0.13,
      baseOpacity: isGlint ? 0.3 + depth * 0.35 : 0.15 + depth * 0.45,
      colorRgb: isGlint ? goldRgb : Math.random() > 0.5 ? violetRgb : goldRgb,
      shape: isGlint ? "diamond" : "circle",
      twinkleSpeed: 0.015 + Math.random() * 0.03,
      twinklePhase: Math.random() * Math.PI * 2,
    };
  });
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let particles: Particle[] = [];
    let animationFrame = 0;
    let frameCount = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = createParticles(canvas.width, canvas.height);
    }

    function drawParticle(particle: Particle, opacity: number) {
      if (!context) return;
      context.fillStyle = `rgba(${particle.colorRgb}, ${opacity})`;
      if (particle.shape === "diamond") {
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(Math.PI / 4);
        context.fillRect(-particle.radius, -particle.radius, particle.radius * 2, particle.radius * 2);
        context.restore();
        return;
      }
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    }

    function draw() {
      if (!canvas || !context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        const twinkle = 0.55 + 0.45 * Math.sin(frameCount * particle.twinkleSpeed + particle.twinklePhase);
        drawParticle(particle, particle.baseOpacity * twinkle);
        particle.y -= particle.speedY;
        if (particle.y < -6) {
          particle.y = canvas.height + 6;
          particle.x = Math.random() * canvas.width;
        }
      });
      frameCount += 1;
      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
