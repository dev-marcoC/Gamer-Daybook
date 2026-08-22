import { SkillBar } from "@/molecules/SkillBar/SkillBar";
import { useGameState } from "@/state/GameStateProvider";
import type { SkillGroup } from "@/types";
import styles from "./SkillGroupList.module.scss";

interface SkillGroupListProps {
  skills: SkillGroup;
}

const maxLevel = 9;

export function SkillGroupList({ skills }: SkillGroupListProps) {
  const { strings } = useGameState();

  const groups: Array<{ key: keyof SkillGroup; label: string }> = [
    { key: "mastered", label: strings.quickView.skillsMastered },
    { key: "proficient", label: strings.quickView.skillsProficient },
    { key: "learning", label: strings.quickView.skillsLearning },
  ];

  return (
    <div className={styles.wrap}>
      {groups.map((group) => (
        <div key={group.key} className={styles.group}>
          <span className={styles.groupLabel}>{group.label}</span>
          <div className={styles.bars}>
            {skills[group.key].map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                detail={`Lv.${skill.level}`}
                percent={(skill.level / maxLevel) * 100}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
