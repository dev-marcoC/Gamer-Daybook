import { ProgressBar } from "@/atoms/ProgressBar/ProgressBar";
import styles from "./SkillBar.module.scss";

interface SkillBarProps {
  name: string;
  detail?: string;
  percent: number;
}

export function SkillBar({ name, detail, percent }: SkillBarProps) {
  return (
    <div className={styles.row}>
      <span className={styles.name}>
        {name} {detail && <span className={styles.detail}>· {detail}</span>}
      </span>
      <ProgressBar percent={percent} />
    </div>
  );
}
