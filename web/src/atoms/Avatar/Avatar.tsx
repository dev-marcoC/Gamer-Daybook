import styles from "./Avatars.module.scss";

interface AvatarProps {
  size?: "medium" | "large";
}

export function Avatar({ size = "medium" }: AvatarProps) {
  return (
    <img
      src="/marco-portrait.png"
      alt="Marco Carollo"
      className={`${styles.avatar} ${size === "large" ? styles.large : styles.medium}`}
    />
  );
}
