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
  title: "Xcuxion School",
  description: "Xcuxion's School of Engineering & Techpreneurship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${poppins.className} antialiased  text-dark`}
      >
        <Toaster />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
