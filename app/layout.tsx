import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

import { Toaster } from "@/components/ui/toaster"

import "@stream-io/video-react-sdk/dist/css/styles.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boom",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        variables: {
          colorText: '#ffffff',
          colorBackground: '#1c1f2e',
          colorPrimary: '#0e79f9',
          colorInputBackground: '#252a41',
          colorInputText: '#fff'
        },
        layout: {
          logoImageUrl: '/icons/yoom-logo.svg',
          socialButtonsVariant: 'iconButton'
        }

      }}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-dark-2 antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
