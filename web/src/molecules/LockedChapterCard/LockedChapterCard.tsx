import { DiceReveal } from "@/molecules/DiceReveal/DiceReveal";
import styles from "./LockedChapterCard.module.scss";

interface LockedChapterCardProps {
  chapterLabel: string;
  period: string;
  rollLabel: string;
  onRevealed: () => void;
}

export function LockedChapterCard({ chapterLabel, period, rollLabel, onRevealed }: LockedChapterCardProps) {
  return (
    <div className={styles.locked}>
      <div className={styles.meta}>
        <span className={styles.number}>{chapterLabel}</span>
        <span className={styles.period}>{period}</span>
      </div>
      <DiceReveal label={rollLabel} onRevealed={onRevealed} />
    </div>
  );
}
