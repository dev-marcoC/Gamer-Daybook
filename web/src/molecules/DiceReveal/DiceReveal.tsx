import { useState } from "react";
import { motion } from "motion/react";
import styles from "./DiceReveal.module.scss";

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const rollTicks = 10;
const tickDurationMs = 70;
const revealDelayMs = 450;

interface DiceRevealProps {
  label: string;
  onRevealed: () => void;
}

export function DiceReveal({ label, onRevealed }: DiceRevealProps) {
  const [rolling, setRolling] = useState(false);
  const [faceIndex, setFaceIndex] = useState(0);

  // cycles the face randomly a fixed number of times to fake a roll, then settles
  function rollDice() {
    if (rolling) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setFaceIndex(Math.floor(Math.random() * diceFaces.length));
      setTimeout(onRevealed, revealDelayMs);
      return;
    }

    setRolling(true);
    let tick = 0;
    const interval = setInterval(() => {
      setFaceIndex(Math.floor(Math.random() * diceFaces.length));
      tick += 1;
      if (tick >= rollTicks) {
        clearInterval(interval);
        setRolling(false);
        setTimeout(onRevealed, revealDelayMs);
      }
    }, tickDurationMs);
  }

  return (
    <button type="button" className={styles.diceButton} onClick={rollDice} disabled={rolling}>
      <motion.span
        className={styles.diceFace}
        animate={rolling ? { rotate: [0, -12, 12, -8, 8, 0] } : {}}
        transition={{ duration: 0.6 }}
      >
        {diceFaces[faceIndex]}
      </motion.span>
      <span className={styles.diceLabel}>{label}</span>
    </button>
  );
}
