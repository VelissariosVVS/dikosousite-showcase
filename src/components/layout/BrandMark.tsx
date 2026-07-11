export function BrandMark({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  const blue = inverse ? "#ffffff" : "#0f7ae5";
  const orange = "#ff7a00";
  const dark = inverse ? "#ffffff" : "#10243e";

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" role="img" focusable="false">
      <rect x="5" y="7" width="48" height="42" rx="9" fill="none" stroke={blue} strokeWidth="4" />
      <path d="M5 18h48" stroke={blue} strokeWidth="4" />
      <circle cx="12" cy="13" r="1.8" fill={blue} />
      <circle cx="18" cy="13" r="1.8" fill={blue} opacity=".78" />
      <circle cx="24" cy="13" r="1.8" fill={blue} opacity=".55" />
      <path d="M17 37 29 27l12 10v12H17V37Z" fill="none" stroke={dark} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M23 48V37h12v11" fill="none" stroke={dark} strokeWidth="3.5" />
      <path d="m36 35 7 19 4-7 8 4 2-4-8-4 7-4-20-4Z" fill={orange} stroke={inverse ? "#10243e" : "#ffffff"} strokeWidth="2" strokeLinejoin="round" />
      <path d="M52 31h7M54 37h6M52 25h6" stroke={orange} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
