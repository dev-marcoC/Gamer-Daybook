import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { StarfieldBackground } from "@/atoms/StarfieldBackground/StarfieldBackground";
import { Toast } from "@/atoms/Toast/Toast";
import { QuickAccessBanner } from "@/molecules/QuickAccessBanner/QuickAccessBanner";
import { IdentityTag } from "@/molecules/IdentityTag/IdentityTag";
import { GameFooter } from "@/organisms/GameFooter/GameFooter";
import { HomeMenu, type MenuEntryConfig } from "@/organisms/HomeMenu/HomeMenu";
import {
  DieIcon,
  BookIcon,
  EnvelopeIcon,
  GearIcon,
  HeartIcon,
} from "@/atoms/icons/MenuIcons";
import { useGameState } from "@/state/GameStateProvider";
import { useCvData } from "@/state/useCvData";
import { useToast } from "@/state/useToast";
import styles from "./HomePage.module.scss";
import { Avatar } from "@/atoms/Avatar/Avatar";

export function HomePage() {
  const { saveFile, strings, startGame } = useGameState();
  const { profile } = useCvData();
  const [entered, setEntered] = useState(saveFile.hasStarted);
  const { message, showToast } = useToast();

  // gate only listens once: the first key press or click starts the game and never fires again
  useEffect(() => {
    if (entered) return;
    function handleKeyDown() {
      enterMenu();
    }
    window.addEventListener("keydown", handleKeyDown, { once: true });
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entered]);

  function enterMenu() {
    if (entered) return;
    startGame();
    setEntered(true);
  }

  const menuEntries: MenuEntryConfig[] = [
    {
      id: "new-game",
      path: "/nuova-partita",
      label: strings.menu.newGameLabel,
      sub: strings.menu.newGameSub,
      flavor: strings.menu.newGameFlavor,
      icon: DieIcon,
    },
    {
      id: "about-me",
      path: "/chi-sono",
      label: strings.menu.aboutMeLabel,
      sub: strings.menu.aboutMeSub,
      flavor: strings.menu.aboutMeFlavor,
      icon: BookIcon,
    },
    {
      id: "contact",
      path: "/contatti",
      label: strings.menu.contactLabel,
      sub: strings.menu.contactSub,
      flavor: strings.menu.contactFlavor,
      icon: EnvelopeIcon,
    },
    {
      id: "passions",
      path: "/passioni",
      label: strings.menu.passionsLabel,
      sub: strings.menu.passionsSub,
      flavor: strings.menu.passionsFlavor,
      icon: HeartIcon,
    },
    {
      id: "options",
      path: "/opzioni",
      label: strings.menu.optionsLabel,
      sub: strings.menu.optionsSub,
      flavor: strings.menu.optionsFlavor,
      icon: GearIcon,
    },
  ];

  return (
    <div className={styles.wrap}>
      <StarfieldBackground />
      <QuickAccessBanner />
      <Toast message={message} />

      {!entered && (
        <section className={styles.gate} onClick={enterMenu}>
          <Avatar size="large" />
          <IdentityTag size="large" />
          <p className={styles.prompt}>{strings.gate.prompt}</p>
          <p className={styles.subtitle}>{strings.gate.subtitle}</p>
        </section>
      )}

      {entered && (
        <motion.section
          className={styles.menu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <IdentityTag size="small" animateTyping={false} />
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{strings.menu.roleTag}</p>
          <div className={styles.divider} />

          <HomeMenu entries={menuEntries} />

          <GameFooter
            onLanguageSwitch={() => showToast(strings.toast.langSwitched)}
          />
        </motion.section>
      )}
    </div>
  );
}
