import { useEffect, useState } from "react";
import { motion } from "motion/react";
import styles from "./IdentityTag.module.scss";

const fullTag = '<MarcoCarollo status="online" />';

interface IdentityTagProps {
  size?: "large" | "small";
  animateTyping?: boolean;
}

export function IdentityTag({ size = "large", animateTyping = true }: IdentityTagProps) {
  const [typedLength, setTypedLength] = useState(animateTyping ? 0 : fullTag.length);

  useEffect(() => {
    if (!animateTyping) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTypedLength(fullTag.length);
      return;
    }
    const interval = setInterval(() => {
      setTypedLength((current) => {
        if (current >= fullTag.length) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [animateTyping]);

  return (
    <motion.p
      className={`${styles.tag} ${size === "small" ? styles.small : styles.large}`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {fullTag.slice(0, typedLength)}
      <span className={styles.cursor} aria-hidden="true" />
    </motion.p>
  );
}
