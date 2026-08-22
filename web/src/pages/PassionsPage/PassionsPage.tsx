import { PageShell } from "@/templates/PageShell/PageShell";
import { PassionsGrid } from "@/organisms/PassionsGrid/PassionsGrid";
import { useGameState } from "@/state/GameStateProvider";
import { useCvData } from "@/state/useCvData";
import { usePassionsData } from "@/state/usePassionsData";
import styles from "./PassionsPage.module.scss";

export function PassionsPage() {
  const { strings } = useGameState();
  const { profile } = useCvData();
  const passionCategories = usePassionsData();

  return (
    <PageShell title={strings.menu.passionsLabel}>
      <p className={styles.wipBadge}>{strings.passionsPage.wipNote}</p>

      <PassionsGrid categories={passionCategories} photoPlaceholderLabel={strings.passionsPage.photoPlaceholder} />

      <a
        className={styles.instagramLink}
        href={`https://instagram.com/${profile.instagramHandle}`}
        target="_blank"
        rel="noreferrer"
      >
        {strings.passionsPage.instagramNote} · @{profile.instagramHandle}
      </a>
    </PageShell>
  );
}
