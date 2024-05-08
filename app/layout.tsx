import type { Metadata } from "next";
import { NeueMachina, PowerGrotesk, SulphurPoint } from "@/utils/customFonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI/ML Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${NeueMachina.variable} ${PowerGrotesk.variable} ${SulphurPoint.variable} `}
        style={{          
          
        }}
      >
        {children}
      </body>
    </html>
  );
}
