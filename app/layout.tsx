import type { Metadata } from "next";
import { NeueMachina, PowerGrotesk, SulphurPoint } from "@/utils/customFonts";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Icon from "@/assets/images/icon.png"

export const metadata: Metadata = {
  
  title: "Neuragrad",
  description: "Unlock the Potential of Artificial Intelligence",
  icons: {
    icon: Icon.src,
  },
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
        style={{}}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
