import { Metadata } from "next";
import { metadata as md } from "@/constants/metadata";
import { Noto_Sans_Display } from "next/font/google";
import Provider from "@/app/provider";
import "@/app/globals.css";

const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});

export const metadata: Metadata = md.main;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon/favicon-32x32.png"
        type="/image/png"
        sizes="32x32"
      />
      <body className={`${notoSansDisplay.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
