import { PageShell } from "@/templates/PageShell/PageShell";
import { SectionHeading } from "@/atoms/SectionHeading/SectionHeading";
import { SkillBar } from "@/molecules/SkillBar/SkillBar";
import { EducationTimelineItem } from "@/molecules/EducationTimelineItem/EducationTimelineItem";
import { SkillGroupList } from "@/organisms/SkillGroupList/SkillGroupList";
import { StrengthsGrid } from "@/organisms/StrengthsGrid/StrengthsGrid";
import {
  StarIcon,
  GraduationCapIcon,
  TrophyIcon,
  GlobeIcon,
} from "@/atoms/icons/SectionIcons";
import { useGameState } from "@/state/GameStateProvider";
import { useCvData } from "@/state/useCvData";
import styles from "./AboutMePage.module.scss";
import { Avatar } from "@/atoms/Avatar/Avatar";

export function AboutMePage() {
  const { strings } = useGameState();
  const { skills, education, strengths, languages, profile } = useCvData();

  return (
    <PageShell title={strings.menu.aboutMeLabel}>
      <div className={styles.intro}>
        <Avatar size="large" />
        <p className={styles.bio}>{profile.bio}</p>
      </div>

      <section className={styles.section}>
        <SectionHeading icon={StarIcon} title={strings.quickView.skills} />
        <SkillGroupList skills={skills} />
      </section>

      <section className={styles.section}>
        <SectionHeading
          icon={GraduationCapIcon}
          title={strings.quickView.education}
        />
        <div className={styles.timeline}>
          {education.map((entry) => (
            <EducationTimelineItem
              key={entry.id}
              title={entry.title}
              institution={entry.institution}
              period={entry.period}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading icon={TrophyIcon} title={strings.quickView.strengths} />
        <StrengthsGrid strengths={strengths} />
      </section>

      <section className={styles.section}>
        <SectionHeading icon={GlobeIcon} title={strings.quickView.languages} />
        <div className={styles.languageBars}>
          {languages.map((language) => (
            <SkillBar
              key={language.name}
              name={language.name}
              detail={language.level}
              percent={(language.proficiency / 5) * 100}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
