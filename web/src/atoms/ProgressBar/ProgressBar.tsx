import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  percent: number;
}

// percent is expected to already be 0-100, callers do their own math (e.g. proficiency / 5)
export function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className={styles.track}>
      <div className={styles.fill} style={{ width: `${percent}%` }} />
    </div>
  );
}
