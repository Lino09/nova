import type { Metadata } from "next";
import "./globals.css";
import { Orbitron, Poppins, Share_Tech_Mono } from "next/font/google";
import { Header, Footer, BackgroundLights } from "@/components";

// Configuración de las fuentes
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });
export const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
export const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ian De Nova",
  description: "Arquitecto de Contenido Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${poppins.className} ${poppins.className} antialiased bg-cyberpunk-blk`}
      >
        <BackgroundLights />
        <Header></Header>
       <main>{children}</main>
       <Footer></Footer> 
      </body>
    </html>
  );
}
