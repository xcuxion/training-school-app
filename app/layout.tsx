import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { EdgeStoreProvider } from "@/lib/edgestore";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-Poppins",
  weight: ["400", "600"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-Nunito",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Xcuxion",
  description: "Promoting inovation and sustainable tech developments in Africa and beyond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${poppins.className} antialiased min-h-screen bg-black  text-fontColor`}
      >
        <Toaster />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
