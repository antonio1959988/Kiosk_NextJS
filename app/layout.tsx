import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastNotification from "@/components/ui/ToastNotification";

const font = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: "Fresh Coffee",
  description: "Kiosko NEXT JS con app router y prisma",
  icons: [
    {
      rel: "icon",
      url: "/logo.svg",
      type: "image/svg+xml"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${font.className} bg-gray-100 antialiased`}
      >
        {children}
        <ToastNotification />
      </body>
    </html>
  );
}
