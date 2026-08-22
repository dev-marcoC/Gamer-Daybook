import { useCallback, useRef } from "react";

type BlipType = "hover" | "select" | "confirm" | "toggle";

const blipSettings: Record<BlipType, { frequency: number; duration: number; wave: OscillatorType }> = {
  hover: { frequency: 420, duration: 0.05, wave: "square" },
  select: { frequency: 660, duration: 0.12, wave: "triangle" },
  confirm: { frequency: 880, duration: 0.1, wave: "triangle" },
  toggle: { frequency: 600, duration: 0.08, wave: "triangle" },
};

export function useSoundEffects(soundEnabled: boolean) {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playBlip = useCallback(
    (type: BlipType) => {
      if (!soundEnabled) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
      const audioContext = audioContextRef.current;
      const { frequency, duration, wave } = blipSettings[type];

      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      oscillator.type = wave;
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.05, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + duration);
    },
    [soundEnabled],
  );

  return playBlip;
}
