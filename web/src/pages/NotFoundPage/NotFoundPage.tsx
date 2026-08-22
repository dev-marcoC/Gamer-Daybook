import { PageShell } from "@/templates/PageShell/PageShell";
import { useGameState } from "@/state/GameStateProvider";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  const { strings } = useGameState();

  return (
    <PageShell title={strings.notFound.title}>
      <p className={styles.body}>{strings.notFound.body}</p>
    </PageShell>
  );
}
