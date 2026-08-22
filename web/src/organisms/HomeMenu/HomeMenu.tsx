import { useRef, useState, type ComponentType, type KeyboardEvent } from "react";
import { MenuItem } from "@/molecules/MenuItem/MenuItem";
import { useGameState } from "@/state/GameStateProvider";
import { useSoundEffects } from "@/state/useSoundEffects";
import styles from "./HomeMenu.module.scss";

export interface MenuEntryConfig {
  id: string;
  path: string;
  label: string;
  sub: string;
  flavor: string;
  icon: ComponentType;
}

interface HomeMenuProps {
  entries: MenuEntryConfig[];
}

export function HomeMenu({ entries }: HomeMenuProps) {
  const { saveFile } = useGameState();
  const playBlip = useSoundEffects(saveFile.soundEnabled);
  const [activeFlavor, setActiveFlavor] = useState("");
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  function handleArrowNavigation(event: KeyboardEvent<HTMLAnchorElement>, index: number) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      itemRefs.current[index + 1]?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      itemRefs.current[index - 1]?.focus();
    }
  }

  return (
    <>
      <nav className={styles.list} aria-label="Main menu">
        {entries.map((entry, index) => (
          <MenuItem
            key={entry.id}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            path={entry.path}
            label={entry.label}
            sub={entry.sub}
            icon={entry.icon}
            onHover={() => {
              setActiveFlavor(entry.flavor);
              playBlip("hover");
            }}
            onLeave={() => setActiveFlavor("")}
            onSelect={() => playBlip("confirm")}
            onArrowKey={(event) => handleArrowNavigation(event, index)}
          />
        ))}
      </nav>

      <p className={`${styles.flavorBar} ${activeFlavor ? styles.show : ""}`}>{activeFlavor}</p>
    </>
  );
}
