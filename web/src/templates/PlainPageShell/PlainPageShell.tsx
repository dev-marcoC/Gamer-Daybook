import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useGameState } from "@/state/GameStateProvider";
import { usePageTitle } from "@/state/usePageTitle";
import styles from "./PlainPageShell.module.scss";

interface PlainPageShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function PlainPageShell({ title, subtitle, children }: PlainPageShellProps) {
  const { strings } = useGameState();
  usePageTitle(`${title} — CV`);

  return (
    <div className={styles.wrap}>
      <Link to="/" className={styles.backLink}>
        ← {strings.common.backToMenu}
      </Link>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
