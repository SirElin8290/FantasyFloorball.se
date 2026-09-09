import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FantasyFloorball.se",
  description: "Fantasy manager för svensk innebandy – bygg ditt lag med riktiga spelare och samla poäng från riktiga matcher.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
