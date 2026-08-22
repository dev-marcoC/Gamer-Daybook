import { useState } from "react";
import { ProgressBar } from "@/atoms/ProgressBar/ProgressBar";
import { Toast } from "@/atoms/Toast/Toast";
import { ChapterCard } from "@/molecules/ChapterCard/ChapterCard";
import { LockedChapterCard } from "@/molecules/LockedChapterCard/LockedChapterCard";
import { EducationWaypoint } from "@/molecules/EducationWaypoint/EducationWaypoint";
import { useGameState } from "@/state/GameStateProvider";
import { useToast } from "@/state/useToast";
import type { ExperienceEntry, EducationEntry } from "@/types";
import styles from "./ChapterTimeline.module.scss";

interface ChapterTimelineProps {
  experience: ExperienceEntry[];
  education: EducationEntry[];
}

type TimelineItem = { kind: "work"; entry: ExperienceEntry } | { kind: "education"; entry: EducationEntry };

export function ChapterTimeline({ experience, education }: ChapterTimelineProps) {
  const { saveFile, strings, markChapterRead } = useGameState();
  const { message, showToast } = useToast();
  const [openChapterId, setOpenChapterId] = useState<string | null>(null);

  const workChapters = [...experience].sort((a, b) => a.order - b.order);
  const timeline: TimelineItem[] = [
    ...workChapters.map((entry) => ({ kind: "work" as const, entry })),
    ...education.map((entry) => ({ kind: "education" as const, entry })),
  ].sort((a, b) => a.entry.order - b.entry.order);
  const chapterNumbers = new Map(workChapters.map((entry, index) => [entry.id, index + 1]));

  function revealChapter(chapterId: string) {
    // capture completion before markChapterRead updates the save file, otherwise the check always sees the new state
    const willComplete =
      !saveFile.chaptersRead.includes(chapterId) && saveFile.chaptersRead.length + 1 === workChapters.length;
    markChapterRead(chapterId);
    setOpenChapterId(chapterId);
    if (willComplete) showToast(strings.menu.achievementUnlocked);
  }

  return (
    <div className={styles.wrap}>
      <Toast message={message} />

      <div className={styles.progress}>
        <span className={styles.progressLabel}>
          {strings.menu.progressLabel}: {saveFile.chaptersRead.length}/{workChapters.length}
        </span>
        <ProgressBar percent={(saveFile.chaptersRead.length / workChapters.length) * 100} />
      </div>

      <div className={styles.list}>
        {timeline.map((item) => {
          if (item.kind === "education") {
            return (
              <EducationWaypoint
                key={item.entry.id}
                label={strings.menu.educationLabel}
                title={item.entry.title}
                institution={item.entry.institution}
                period={item.entry.period}
              />
            );
          }

          const chapter = item.entry;
          const isRead = saveFile.chaptersRead.includes(chapter.id);
          const chapterLabel = `${strings.menu.chapterLabel} ${String(chapterNumbers.get(chapter.id)).padStart(2, "0")}`;

          if (!isRead) {
            return (
              <LockedChapterCard
                key={chapter.id}
                chapterLabel={chapterLabel}
                period={chapter.period}
                rollLabel={strings.menu.rollToReveal}
                onRevealed={() => revealChapter(chapter.id)}
              />
            );
          }

          return (
            <ChapterCard
              key={chapter.id}
              chapterLabel={chapterLabel}
              role={chapter.role}
              company={chapter.company}
              period={chapter.period}
              description={chapter.description}
              stack={chapter.stack}
              isOpen={openChapterId === chapter.id}
              readLabel={strings.menu.chapterReadLabel}
              onToggle={() => setOpenChapterId(openChapterId === chapter.id ? null : chapter.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
