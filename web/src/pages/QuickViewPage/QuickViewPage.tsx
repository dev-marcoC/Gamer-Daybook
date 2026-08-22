import { PlainPageShell } from "@/templates/PlainPageShell/PlainPageShell";
import { SectionHeading } from "@/atoms/SectionHeading/SectionHeading";
import { ResumeEntryBlock } from "@/molecules/ResumeEntryBlock/ResumeEntryBlock";
import { ContactLink } from "@/molecules/ContactLink/ContactLink";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  StarIcon,
  TrophyIcon,
  GlobeIcon,
  FolderIcon,
  MailIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/atoms/icons/SectionIcons";
import { HeartIcon } from "@/atoms/icons/MenuIcons";
import { useGameState } from "@/state/GameStateProvider";
import { useCvData } from "@/state/useCvData";
import styles from "./QuickViewPage.module.scss";

export function QuickViewPage() {
  const { strings } = useGameState();
  const { profile, experience, education, skills, strengths, languages, interests, projects } = useCvData();

  return (
    <PlainPageShell title={profile.name} subtitle={strings.quickView.subtitle}>
      <p className={styles.bio}>{profile.bio}</p>

      <section className={styles.section}>
        <SectionHeading icon={BriefcaseIcon} title={strings.quickView.experience} />
        {experience.map((entry) => (
          <ResumeEntryBlock
            key={entry.id}
            title={entry.role}
            titleMuted={entry.company}
            meta={`${entry.period}${entry.location ? ` · ${entry.location}` : ""}`}
            description={entry.description}
            tags={entry.stack}
          />
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeading icon={GraduationCapIcon} title={strings.quickView.education} />
        {education.map((entry) => (
          <ResumeEntryBlock key={entry.id} title={entry.title} meta={`${entry.institution} · ${entry.period}`} />
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeading icon={StarIcon} title={strings.quickView.skills} />
        <p className={styles.plainEntry}>
          <strong>{strings.quickView.skillsExpert}:</strong> {skills.expert.join(", ")}
        </p>
        <p className={styles.plainEntry}>
          <strong>{strings.quickView.skillsIntermediate}:</strong> {skills.intermediate.join(", ")}
        </p>
        <p className={styles.plainEntry}>
          <strong>{strings.quickView.skillsLearning}:</strong> {skills.learning.join(", ")}
        </p>
      </section>

      <section className={styles.section}>
        <SectionHeading icon={TrophyIcon} title={strings.quickView.strengths} />
        {strengths.map((strength) => (
          <p key={strength.id} className={styles.plainEntry}>
            <strong>{strength.title}:</strong> {strength.description}
          </p>
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeading icon={GlobeIcon} title={strings.quickView.languages} />
        <p className={styles.plainEntry}>
          {languages.map((language) => `${language.name} (${language.level})`).join(" · ")}
        </p>
      </section>

      <section className={styles.section}>
        <SectionHeading icon={FolderIcon} title={strings.quickView.projects} />
        {projects.map((project) => (
          <ResumeEntryBlock
            key={project.id}
            title={project.name}
            titleMuted={project.period}
            description={project.description}
          />
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeading icon={HeartIcon} title={strings.quickView.interests} />
        <p className={styles.plainEntry}>{interests.join(" · ")}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.contactTitle}>{strings.quickView.contact}</h2>
        <div className={styles.contactLinks}>
          <ContactLink icon={MailIcon} href={`mailto:${profile.email}`} label={profile.email} />
          <ContactLink
            icon={LinkedInIcon}
            href={`https://linkedin.com/in/${profile.linkedinHandle}`}
            label={`linkedin.com/in/${profile.linkedinHandle}`}
            external
          />
          <ContactLink
            icon={InstagramIcon}
            href={`https://instagram.com/${profile.instagramHandle}`}
            label={`@${profile.instagramHandle}`}
            external
          />
          <ContactLink href={`https://github.com/${profile.githubHandle}`} label={`github.com/${profile.githubHandle}`} external />
        </div>
      </section>
    </PlainPageShell>
  );
}
