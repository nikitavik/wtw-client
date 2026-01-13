import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WTW Client",
  description: "Web Pet WTW Client Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
