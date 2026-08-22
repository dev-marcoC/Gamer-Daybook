import { SkillBar } from "@/molecules/SkillBar/SkillBar";
import { useGameState } from "@/state/GameStateProvider";
import type { SkillGroup } from "@/types";
import styles from "./SkillGroupList.module.scss";

interface SkillGroupListProps {
  skills: SkillGroup;
}

// arbitrary but consistent bar widths per proficiency tier, not a precise measurement
const levelWidth: Record<keyof SkillGroup, number> = {
  expert: 95,
  intermediate: 60,
  learning: 25,
};

export function SkillGroupList({ skills }: SkillGroupListProps) {
  const { strings } = useGameState();

  const groups: Array<{ key: keyof SkillGroup; label: string }> = [
    { key: "expert", label: strings.quickView.skillsExpert },
    { key: "intermediate", label: strings.quickView.skillsIntermediate },
    { key: "learning", label: strings.quickView.skillsLearning },
  ];

  return (
    <div className={styles.wrap}>
      {groups.map((group) => (
        <div key={group.key} className={styles.group}>
          <span className={styles.groupLabel}>{group.label}</span>
          <div className={styles.bars}>
            {skills[group.key].map((skill) => (
              <SkillBar key={skill} name={skill} percent={levelWidth[group.key]} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
