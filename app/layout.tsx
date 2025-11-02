import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBT Proposal Assistant - AI Imaging Biobank",
  description: "Expert research assistant for DBT project proposal on National Network for AI-Enabled Imaging Biobank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
