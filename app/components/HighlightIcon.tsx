export type IconName = "project" | "stack" | "code";

export default function HighlightIcon({ name }: { name: IconName }) {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      {name === "project" && (
        <>
          <rect x="6" y="6" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="14" y="14" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" />
        </>
      )}
      {name === "stack" && (
        <>
          <rect x="7" y="10" width="26" height="6" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <rect x="10" y="19" width="20" height="6" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <rect x="13" y="28" width="14" height="6" rx="3" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}
      {name === "code" && (
        <>
          <path d="M13 13 L7 20 L13 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 13 L25 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M27 20 L31 20" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 3" />
          <circle cx="34" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}
    </svg>
  );
}
