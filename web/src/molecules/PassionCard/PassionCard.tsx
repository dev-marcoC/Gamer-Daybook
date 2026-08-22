import { ImageIcon } from "@/atoms/icons/SectionIcons";
import styles from "./PassionCard.module.scss";

interface PassionCardProps {
  title: string;
  blurb: string;
  photoPlaceholderLabel: string;
}

export function PassionCard({ title, blurb, photoPlaceholderLabel }: PassionCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.placeholder}>
        <ImageIcon />
        <span>{photoPlaceholderLabel}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.blurb}>{blurb}</p>
    </article>
  );
}
