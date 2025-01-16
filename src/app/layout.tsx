import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trend Square",
  description:
    "Trend Square is a platform for discovering new trends in fashion, beauty, and lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
