import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI — Auto-generate changelogs from git commits",
  description: "Analyzes git commits and generates formatted changelogs for releases automatically. Built for engineering teams and open source maintainers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="64f22944-8a04-4a66-ac89-12ad5243504d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
