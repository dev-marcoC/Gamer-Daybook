import styles from "./EducationTimelineItem.module.scss";

interface EducationTimelineItemProps {
  title: string;
  institution: string;
  period: string;
}

export function EducationTimelineItem({ title, institution, period }: EducationTimelineItemProps) {
  return (
    <div className={styles.entry}>
      <span className={styles.period}>{period}</span>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.institution}>{institution}</p>
      </div>
    </div>
  );
}
