import { PageShell } from "@/templates/PageShell/PageShell";
import { ChapterTimeline } from "@/organisms/ChapterTimeline/ChapterTimeline";
import { useGameState } from "@/state/GameStateProvider";
import { useCvData } from "@/state/useCvData";
import styles from "./NewGamePage.module.scss";

export function NewGamePage() {
  const { strings } = useGameState();
  const { experience, education } = useCvData();

  return (
    <PageShell title={strings.menu.newGameLabel}>
      <p className={styles.intro}>{strings.menu.newGameIntro}</p>
      <ChapterTimeline experience={experience} education={education} />
    </PageShell>
  );
}
