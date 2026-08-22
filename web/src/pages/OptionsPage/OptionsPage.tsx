import { useNavigate } from "react-router-dom";
import { PageShell } from "@/templates/PageShell/PageShell";
import { Toast } from "@/atoms/Toast/Toast";
import { useGameState } from "@/state/GameStateProvider";
import { useToast } from "@/state/useToast";
import styles from "./OptionsPage.module.scss";

export function OptionsPage() {
  const { saveFile, strings, toggleSound, setLanguage, resetSaveFile } = useGameState();
  const { message, showToast } = useToast();
  const navigate = useNavigate();

  function handleReset() {
    resetSaveFile();
    showToast(strings.optionsPage.resetConfirm);
    navigate("/");
  }

  return (
    <PageShell title={strings.menu.optionsLabel}>
      <Toast message={message} />

      <div className={styles.row}>
        <span className={styles.label}>{strings.optionsPage.soundLabel}</span>
        <button type="button" className={styles.toggle} onClick={toggleSound} aria-pressed={saveFile.soundEnabled}>
          {saveFile.soundEnabled ? strings.footer.soundOn : strings.footer.soundOff}
        </button>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>{strings.optionsPage.languageLabel}</span>
        <div className={styles.languageGroup}>
          <button
            type="button"
            className={saveFile.language === "it" ? styles.activeLang : styles.toggle}
            onClick={() => setLanguage("it")}
          >
            IT
          </button>
          <button
            type="button"
            className={saveFile.language === "en" ? styles.activeLang : styles.toggle}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>{strings.optionsPage.resetLabel}</span>
        <button type="button" className={styles.resetButton} onClick={handleReset}>
          {strings.optionsPage.resetLabel}
        </button>
      </div>
    </PageShell>
  );
}
