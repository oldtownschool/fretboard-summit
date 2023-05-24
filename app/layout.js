import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ['latin'] })

const aurochs = localFont({
  preload: true,
  display: "swap",
  src: [
    {
      path: "../public/fonts/Aurochs/Aurochs-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Aurochs/Aurochs-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aurochs/Aurochs-Heavy.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aurochs",
});
const handbill = localFont({
  preload: true,
  display: "swap",
  src: [
    {
      path: "../public/fonts/Handbill/Handbill-Condensed.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Handbill/Handbill-Grotesk.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Handbill/Handbill-Slab.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-handbill",
});

export const metadata = {
  title: "Fretboard Summit 2023",
  description:
    "A THREE-DAY GUITAR FESTIVAL FROM THE FRETBOARD JOURNAL AND OLD TOWN SCHOOL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${aurochs.variable} ${handbill.variable}`}>
      <body>{children}</body>
    </html>
  );
}
