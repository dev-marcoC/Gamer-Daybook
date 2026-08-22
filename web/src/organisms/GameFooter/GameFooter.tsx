import { useGameState } from "@/state/GameStateProvider";
import { useSoundEffects } from "@/state/useSoundEffects";
import styles from "./GameFooter.module.scss";

interface GameFooterProps {
  onLanguageSwitch: () => void;
}

export function GameFooter({ onLanguageSwitch }: GameFooterProps) {
  const { saveFile, strings, toggleSound, setLanguage } = useGameState();
  const playBlip = useSoundEffects(saveFile.soundEnabled);

  function handleSoundToggle() {
    toggleSound();
    playBlip("toggle");
  }

  function handleLanguageToggle() {
    setLanguage(saveFile.language === "it" ? "en" : "it");
    onLanguageSwitch();
  }

  return (
    <div className={styles.footer}>
      <button type="button" onClick={handleSoundToggle} aria-pressed={saveFile.soundEnabled}>
        {saveFile.soundEnabled ? strings.footer.soundOn : strings.footer.soundOff}
      </button>

      <div className={styles.saveIndicator}>
        <span className={styles.saveDot} aria-hidden="true" />
        {strings.footer.save}
      </div>

      <button type="button" onClick={handleLanguageToggle}>
        {strings.footer.langButton}
      </button>
    </div>
  );
}
