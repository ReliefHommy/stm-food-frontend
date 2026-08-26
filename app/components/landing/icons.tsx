// app/components/landing/icons.tsx
// Inline, stroke-based SVG marks for the landing page. No emoji, no icon fonts.

type IconProps = {
  className?: string;
};

const STROKE = 1.8;

export function LogoMark({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 17c0 5 4 9 9 9s9-4 9-9"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <path
        d="M5 17h22"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <path
        d="M20 5c1.5 2 1.5 4.5-1 6M15 5c-2.2 1.6-2.6 4-1.2 6.2"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <circle cx="16" cy="17" r="2.2" stroke="currentColor" strokeWidth={STROKE} />
    </svg>
  );
}

export function StorefrontIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M5 13v13h22V13" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 8l2-4h20l2 4M4 8c0 2.5 2 4.5 4.5 4.5S13 10.5 13 8c0 2.5 2 4.5 4.5 4.5S22 10.5 22 8c0 2.5 2 4.5 4.5 4.5S31 10.5 31 8"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 26v-7h8v7" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CuratedBoxIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M4 11l12-6 12 6-12 6-12-6z" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11v11l12 6 12-6V11" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17v11" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
    </svg>
  );
}

export function ScheduleIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="6" width="24" height="22" rx="2.5" stroke="currentColor" strokeWidth={STROKE} />
      <path d="M4 12h24" stroke="currentColor" strokeWidth={STROKE} />
      <path d="M10 3v6M22 3v6" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M9 18h4M9 23h4M14 18h4M14 23h9M23 18h5" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={STROKE} />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={STROKE} />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
    </svg>
  );
}

// Decorative hero composition: chili, lime slice, herb sprig, box outline.
export function HeroIllustration({ className = 'w-full h-auto' }: IconProps) {
  return (
    <svg viewBox="0 0 420 380" fill="none" className={className} aria-hidden="true">
      <rect x="140" y="150" width="220" height="180" rx="10" stroke="#C1522E" strokeWidth="2" />
      <path d="M140 195h220" stroke="#C1522E" strokeWidth="2" />
      <path d="M215 150l35 45 35-45" stroke="#C1522E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <circle cx="90" cy="90" r="46" stroke="#3F5D3A" strokeWidth="2" />
      <path
        d="M90 50v80M56 90h68M65 65l50 50M115 65l-50 50"
        stroke="#3F5D3A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M270 40c30 6 44 34 34 66-8 26-38 40-58 26-16-12-16-34-2-48 10-10 24-12 34-4"
        stroke="#C1522E"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M266 38c6-10 18-16 28-14" stroke="#3F5D3A" strokeWidth="2" strokeLinecap="round" />

      <path
        d="M40 230c10-24 34-36 58-30M40 230c-8 22 4 46 28 52M40 230c18 6 30 24 26 46"
        stroke="#E8B84B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle cx="340" cy="120" r="5" fill="#E8B84B" />
      <circle cx="365" cy="250" r="4" fill="#3F5D3A" />
      <circle cx="60" cy="310" r="4" fill="#C1522E" />
    </svg>
  );
}
