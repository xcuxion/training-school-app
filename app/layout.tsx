import type { Metadata } from "next";
import "./globals.css";
import { Exo_2, Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Technology Wrights",
  description: "Makers of modern technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${exo2.className} antialiased bg-primary-light text-color-light`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
