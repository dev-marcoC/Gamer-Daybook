import { AnimatePresence, motion } from "motion/react";
import styles from "./Toast.module.scss";

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div className={styles.wrap}>
      <AnimatePresence>
        {message && (
          <motion.p
            className={styles.toast}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
