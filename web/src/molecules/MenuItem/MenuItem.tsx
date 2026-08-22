import { forwardRef, type ComponentType, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  path: string;
  label: string;
  sub: string;
  icon: ComponentType;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
  onArrowKey: (event: KeyboardEvent<HTMLAnchorElement>) => void;
}

export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(function MenuItem(
  { path, label, sub, icon: Icon, onHover, onLeave, onSelect, onArrowKey },
  ref,
) {
  return (
    <Link
      to={path}
      ref={ref}
      className={styles.item}
      onMouseEnter={onHover}
      onFocus={onHover}
      onMouseLeave={onLeave}
      onBlur={onLeave}
      onClick={onSelect}
      onKeyDown={onArrowKey}
    >
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.labelWrap}>
        {label}
        <span className={styles.sub}>{sub}</span>
      </span>
    </Link>
  );
});
