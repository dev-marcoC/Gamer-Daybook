import { StrengthCard } from "@/molecules/StrengthCard/StrengthCard";
import type { Strength } from "@/types";
import styles from "./StrengthsGrid.module.scss";

interface StrengthsGridProps {
  strengths: Strength[];
}

export function StrengthsGrid({ strengths }: StrengthsGridProps) {
  return (
    <div className={styles.grid}>
      {strengths.map((strength) => (
        <StrengthCard key={strength.id} title={strength.title} description={strength.description} />
      ))}
    </div>
  );
}
