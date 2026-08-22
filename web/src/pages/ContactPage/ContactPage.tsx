import { PageShell } from "@/templates/PageShell/PageShell";
import { ContactLink } from "@/molecules/ContactLink/ContactLink";
import { ContactForm } from "@/organisms/ContactForm/ContactForm";
import { MailIcon, LinkedInIcon, InstagramIcon } from "@/atoms/icons/SectionIcons";
import { useGameState } from "@/state/GameStateProvider";
import { useCvData } from "@/state/useCvData";
import styles from "./ContactPage.module.scss";

export function ContactPage() {
  const { strings } = useGameState();
  const { profile } = useCvData();

  return (
    <PageShell title={strings.menu.contactLabel}>
      <div className={styles.directLinks}>
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
      </div>

      <ContactForm />
    </PageShell>
  );
}
