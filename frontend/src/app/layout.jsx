import { Inter, Radio_Canada } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const radioCanada = Radio_Canada({
  weight: ["600", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bill Splitter",
  description: "Bill splitting app built with Next.js with AI integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`font-semibold ${radioCanada.className}`}>
        {children}
      </body>
    </html>
  );
}
