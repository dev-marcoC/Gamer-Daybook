import { Link } from "react-router-dom";
import { useGameState } from "@/state/GameStateProvider";
import styles from "./QuickAccessBanner.module.scss";

export function QuickAccessBanner() {
  const { strings } = useGameState();

  return (
    <div className={styles.banner} role="note">
      <span className={styles.icon} aria-hidden="true">
        !
      </span>
      <span className={styles.label}>{strings.quickAccess.banner}</span>
      <Link to="/cv" className={styles.link}>
        {strings.quickAccess.link}
      </Link>
    </div>
  );
}
