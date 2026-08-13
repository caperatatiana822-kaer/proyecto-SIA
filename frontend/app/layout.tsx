import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "SIA - Sistema de Información de Asistencias",
  description: "Sistema para el control de aprendices y asistencias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body>

        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}