import { Noto_Sans_Display } from "next/font/google";
import Provider from "./provider";
import "./globals.css";

const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});

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
