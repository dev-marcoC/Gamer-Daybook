import type { ComponentType } from "react";
import styles from "./ContactLink.module.scss";

interface ContactLinkProps {
  icon?: ComponentType;
  href: string;
  label: string;
  external?: boolean;
}

export function ContactLink({ icon: Icon, href, label, external }: ContactLinkProps) {
  return (
    <a className={styles.link} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {Icon && <Icon />}
      {label}
    </a>
  );
}
