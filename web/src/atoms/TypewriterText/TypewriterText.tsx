import { useEffect, useState } from "react";
import styles from "./TypewriterText.module.scss";

interface TypewriterTextProps {
  text: string;
  speedMs?: number;
}

export function TypewriterText({ text, speedMs = 14 }: TypewriterTextProps) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visibleLength, setVisibleLength] = useState(prefersReducedMotion ? text.length : 0);

  useEffect(() => {
    setVisibleLength(prefersReducedMotion ? text.length : 0);
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setVisibleLength((current) => {
        if (current >= text.length) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, speedMs, prefersReducedMotion]);

  return <p className={styles.text}>{text.slice(0, visibleLength)}</p>;
}
