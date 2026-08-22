import { motion, AnimatePresence } from "motion/react";
import { TypewriterText } from "@/atoms/TypewriterText/TypewriterText";
import styles from "./ChapterCard.module.scss";

interface ChapterCardProps {
  chapterLabel: string;
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  isOpen: boolean;
  readLabel: string;
  onToggle: () => void;
}

export function ChapterCard({
  chapterLabel,
  role,
  company,
  period,
  description,
  stack,
  isOpen,
  readLabel,
  onToggle,
}: ChapterCardProps) {
  return (
    <div className={styles.chapter}>
      <button type="button" className={styles.header} onClick={onToggle} aria-expanded={isOpen}>
        <span className={styles.number}>{chapterLabel}</span>
        <span className={styles.title}>
          {role} <span className={styles.company}>· {company}</span>
        </span>
        <span className={styles.period}>{period}</span>
        <span className={styles.readBadge} aria-label={readLabel}>
          ✓
        </span>
      </button>

      {/* height:auto animation needs AnimatePresence since the content is conditionally rendered */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.body}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TypewriterText text={description} />
            <div className={styles.stack}>
              {stack.map((tech) => (
                <span key={tech} className={styles.stackChip}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
