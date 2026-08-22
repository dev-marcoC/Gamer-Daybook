import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import translations, { type TranslationShape } from "@/i18n/translations";
import type { Language, SaveFile } from "@/types";

const storageKey = "gamerdaybook.savefile";

const defaultSaveFile: SaveFile = {
  hasStarted: false,
  chaptersRead: [],
  soundEnabled: false,
  language: "it",
};

function loadSaveFile(): SaveFile {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return defaultSaveFile;
  try {
    return { ...defaultSaveFile, ...JSON.parse(raw) };
  } catch {
    return defaultSaveFile;
  }
}

interface GameStateValue {
  saveFile: SaveFile;
  strings: TranslationShape;
  startGame: () => void;
  markChapterRead: (chapterId: string) => void;
  toggleSound: () => void;
  setLanguage: (language: Language) => void;
  resetSaveFile: () => void;
}

const GameStateContext = createContext<GameStateValue | null>(null);

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [saveFile, setSaveFile] = useState<SaveFile>(loadSaveFile);

  // persist on every change instead of only on unmount, so a closed tab never loses progress
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(saveFile));
  }, [saveFile]);

  const value = useMemo<GameStateValue>(
    () => ({
      saveFile,
      strings: translations[saveFile.language],
      startGame: () => setSaveFile((current) => ({ ...current, hasStarted: true })),
      markChapterRead: (chapterId) =>
        setSaveFile((current) =>
          current.chaptersRead.includes(chapterId)
            ? current
            : { ...current, chaptersRead: [...current.chaptersRead, chapterId] },
        ),
      toggleSound: () => setSaveFile((current) => ({ ...current, soundEnabled: !current.soundEnabled })),
      setLanguage: (language) => setSaveFile((current) => ({ ...current, language })),
      // keep the chosen language across a reset, everything else goes back to defaults
      resetSaveFile: () => setSaveFile((current) => ({ ...defaultSaveFile, language: current.language })),
    }),
    [saveFile],
  );

  return <GameStateContext.Provider value={value}>{children}</GameStateContext.Provider>;
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error("useGameState must be used inside a GameStateProvider");
  }
  return context;
}
