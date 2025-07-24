import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Poppins, Inter, Montserrat } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import Provider from "@/components/SessionProvider";
import  { UserProvider } from "@/app/context/UserContext";
import { getCurrentUser } from "@/server/session";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sync Corp.",
  description: "Your team management app.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={` ${poppins.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <TRPCReactProvider>
          <Provider>
           {children}
          </Provider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
