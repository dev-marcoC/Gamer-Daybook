import { useGameState } from "./GameStateProvider";
import * as cvEn from "@/data/cv.en";
import * as cvIt from "@/data/cv.it";

// content is fully duplicated per language on purpose, so every sentence reads
// naturally instead of being assembled from translated fragments
export function useCvData() {
  const { saveFile } = useGameState();
  return saveFile.language === "it" ? cvIt : cvEn;
}
