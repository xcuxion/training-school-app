import type { Metadata } from "next";
import "./globals.css";
import { Exo_2, Nunito_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";


const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: "600"
});

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"]
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
        className={`${nunito_Sans.className} ${exo2.className} antialiased bg-primary-light text-color-light`}
      >
        <Toaster/>

        {children}
      </body>
    </html>
  );
}
