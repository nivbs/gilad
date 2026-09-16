import type { Metadata } from "next";
import { Newsreader, Noto_Sans_Hebrew, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const notoHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-hebrew",
  subsets: ["hebrew"],
});

export const metadata: Metadata = {
  title: "For Gilad — from Niv",
  description: "A private birthday edition.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${newsreader.variable} ${notoHebrew.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
