import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samael | Fullstack Developer",
  description: "Personal portfolio of Idriss Samael Mrayah - Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Script
          id="umami-script"
          defer 
          src="scripts/umami.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID as string}
          strategy="afterInteractive"
        >
          {children}
        </Script>
      </body>
    </html>
  );
}
