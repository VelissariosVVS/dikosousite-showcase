import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f8fc", borderRadius: 40 }}>
      <svg width="150" height="150" viewBox="0 0 64 64">
        <rect x="7" y="8" width="45" height="40" rx="8" fill="none" stroke="#0f7ae5" strokeWidth="5" />
        <path d="M7 19h45" stroke="#0f7ae5" strokeWidth="5" />
        <path d="M18 38 29 29l11 9v10H18V38Z" fill="none" stroke="#10243e" strokeWidth="4" strokeLinejoin="round" />
        <path d="m36 35 7 19 4-7 8 4 2-4-8-4 7-4-20-4Z" fill="#ff7a00" stroke="#fff" strokeWidth="2" />
      </svg>
    </div>, size,
  );
}
