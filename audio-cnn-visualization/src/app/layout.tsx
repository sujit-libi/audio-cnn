import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Audio CNN Visualization",
  description:
    "Audio Classification and Visualization using Convolutional Neural Network",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
