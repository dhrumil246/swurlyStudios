import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";
import dynamic from 'next/dynamic';
const VoxelBackground = dynamic(() => import("@/components/VoxelBackground"));
import Header from "@/components/Header";

const malven = localFont({
  src: '../../fonts/MalvenRegular-51MRB.otf',
  variable: '--font-malven'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Swurly Studios",
  description: "We build empires in the Minecraft ecosystem.",
  metadataBase: new URL('https://swurlystudios.com'),
  openGraph: {
    title: "Swurly Studios",
    description: "We build empires in the Minecraft ecosystem.",
    url: 'https://swurlystudios.com',
    siteName: 'Swurly Studios',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Swurly Studios",
    description: "We build empires in the Minecraft ecosystem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${malven.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AnalyticsProvider>
          <SmoothScrollProvider>
            <VoxelBackground />
            <Header />
            {children}
          </SmoothScrollProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
