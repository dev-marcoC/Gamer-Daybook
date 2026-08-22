import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { StarfieldBackground } from "@/atoms/StarfieldBackground/StarfieldBackground";
import { useGameState } from "@/state/GameStateProvider";
import { usePageTitle } from "@/state/usePageTitle";
import styles from "./PageShell.module.scss";

interface PageShellProps {
  title: string;
  children: ReactNode;
}

export function PageShell({ title, children }: PageShellProps) {
  const { strings } = useGameState();
  usePageTitle(`${title} · Marco Carollo`);

  return (
    <div className={styles.wrap}>
      <StarfieldBackground />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/" className={styles.backLink}>
          ← {strings.common.backToMenu}
        </Link>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.body}>{children}</div>
      </motion.div>
    </div>
  );
}
