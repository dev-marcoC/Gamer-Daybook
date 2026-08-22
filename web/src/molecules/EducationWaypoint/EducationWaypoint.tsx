import { GraduationCapIcon } from "@/atoms/icons/SectionIcons";
import styles from "./EducationWaypoint.module.scss";

interface EducationWaypointProps {
  label: string;
  title: string;
  institution: string;
  period: string;
}

export function EducationWaypoint({ label, title, institution, period }: EducationWaypointProps) {
  return (
    <div className={styles.waypoint}>
      <span className={styles.icon}>
        <GraduationCapIcon />
      </span>
      <div className={styles.body}>
        <span className={styles.label}>{label}</span>
        <p className={styles.title}>{title}</p>
        <p className={styles.institution}>{institution}</p>
      </div>
      <span className={styles.period}>{period}</span>
    </div>
  );
}
