import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <svg width="32" height="32" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#f4f8fc" />
      <rect x="7" y="8" width="45" height="40" rx="8" fill="none" stroke="#0f7ae5" strokeWidth="5" />
      <path d="M7 19h45" stroke="#0f7ae5" strokeWidth="5" />
      <path d="M18 38 29 29l11 9v10H18V38Z" fill="none" stroke="#10243e" strokeWidth="4" strokeLinejoin="round" />
      <path d="m36 35 7 19 4-7 8 4 2-4-8-4 7-4-20-4Z" fill="#ff7a00" stroke="#fff" strokeWidth="2" />
    </svg>, size,
  );
}
