import styles from "./StrengthCard.module.scss";

interface StrengthCardProps {
  title: string;
  description: string;
}

export function StrengthCard({ title, description }: StrengthCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
