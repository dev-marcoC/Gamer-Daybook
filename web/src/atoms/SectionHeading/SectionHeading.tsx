import type { ComponentType } from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  icon: ComponentType;
  title: string;
}

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <h2 className={styles.heading}>
      <Icon /> {title}
    </h2>
  );
}
