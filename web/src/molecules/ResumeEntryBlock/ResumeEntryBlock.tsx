import styles from "./ResumeEntryBlock.module.scss";

interface ResumeEntryBlockProps {
  title: string;
  titleMuted?: string;
  meta?: string;
  description?: string;
  tags?: string[];
}

export function ResumeEntryBlock({ title, titleMuted, meta, description, tags }: ResumeEntryBlockProps) {
  return (
    <article className={styles.entry}>
      <p className={styles.title}>
        {title} {titleMuted && <span className={styles.muted}>· {titleMuted}</span>}
      </p>
      {meta && <p className={styles.meta}>{meta}</p>}
      {description && <p className={styles.description}>{description}</p>}
      {tags && tags.length > 0 && <p className={styles.tags}>{tags.join(" · ")}</p>}
    </article>
  );
}
