import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elas-beauty-studio.gustavoborba632.chatgpt.site"),
  title: "Elas Beauty Studio | Beleza e bem-estar em João Pessoa",
  description: "Um espaço de beleza, cuidado e bem-estar em João Pessoa. Agende unhas, cílios, hair, depilação e outros cuidados pelo WhatsApp.",
  openGraph: {
    title: "Elas Beauty Studio | Realce sua beleza",
    description: "Beleza, cuidado e bem-estar em João Pessoa. Agende seu momento pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "https://elas-beauty-studio.gustavoborba632.chatgpt.site/og.png", width: 1200, height: 630, alt: "Elas Beauty Studio — Realce sua beleza. Viva seu momento." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elas Beauty Studio | Realce sua beleza",
    description: "Beleza, cuidado e bem-estar em João Pessoa.",
    images: ["https://elas-beauty-studio.gustavoborba632.chatgpt.site/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
