import { sharedIconProps } from "./sharedIconProps";

export function MailIcon() {
  return (
    <svg {...sharedIconProps}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 6.5 12 13l8-6.5" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg {...sharedIconProps}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11 16.5v-3.7c0-1.4 1-2.3 2.2-2.3 1.2 0 2.1.9 2.1 2.3v3.7" />
      <line x1="11" y1="10.5" x2="11" y2="16.5" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg {...sharedIconProps}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg {...sharedIconProps}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <line x1="3" y1="12.5" x2="21" y2="12.5" />
    </svg>
  );
}

export function GraduationCapIcon() {
  return (
    <svg {...sharedIconProps}>
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6.5 11.7v4.3c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.3" />
      <line x1="21" y1="9.5" x2="21" y2="15" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg {...sharedIconProps}>
      <path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.3-4.2 6-.9 2.6-5.5Z" />
    </svg>
  );
}

export function TrophyIcon() {
  return (
    <svg {...sharedIconProps}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5.5H4v1.5a3.5 3.5 0 0 0 3.5 3.5" />
      <path d="M17 5.5h3v1.5A3.5 3.5 0 0 1 16.5 10.5" />
      <line x1="12" y1="14" x2="12" y2="17.5" />
      <line x1="8.5" y1="20" x2="15.5" y2="20" />
      <line x1="12" y1="17.5" x2="12" y2="20" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...sharedIconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <ellipse cx="12" cy="12" rx="3.6" ry="8.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
    </svg>
  );
}

export function FolderIcon() {
  return (
    <svg {...sharedIconProps}>
      <path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h4l2 2.5h8a1.5 1.5 0 0 1 1.5 1.5V17a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17v-10.5Z" />
    </svg>
  );
}

export function ImageIcon() {
  return (
    <svg {...sharedIconProps}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M4 17 9.5 12l3 3 3.5-4L20 15.5" />
    </svg>
  );
}
