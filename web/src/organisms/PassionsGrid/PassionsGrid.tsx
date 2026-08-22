import { PassionCard } from "@/molecules/PassionCard/PassionCard";
import type { PassionCategory } from "@/types";
import styles from "./PassionsGrid.module.scss";

interface PassionsGridProps {
  categories: PassionCategory[];
  photoPlaceholderLabel: string;
}

export function PassionsGrid({ categories, photoPlaceholderLabel }: PassionsGridProps) {
  return (
    <div className={styles.grid}>
      {categories.map((category) => (
        <PassionCard
          key={category.id}
          title={category.title}
          blurb={category.blurb}
          photoPlaceholderLabel={photoPlaceholderLabel}
        />
      ))}
    </div>
  );
}
