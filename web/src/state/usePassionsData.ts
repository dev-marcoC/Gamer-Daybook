import { useGameState } from "./GameStateProvider";
import { passionCategories as passionsEn } from "@/data/passions.en";
import { passionCategories as passionsIt } from "@/data/passions.it";

export function usePassionsData() {
  const { saveFile } = useGameState();
  return saveFile.language === "it" ? passionsIt : passionsEn;
}
