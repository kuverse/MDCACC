import type { Metadata } from "next";
import ThemeProviderWrapper from "../util/ThemeProviderWrapper";
import "./globals.css";
import Header from "@/components/Header/Header";
//import Footer from "@/components/Footer/Footer";
import localFont from "next/font/local";
import Footer2 from "@/components/Footer/Footer2";


const interFontBold = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter-bold",
  weight: "900",
  display: "swap",
});

const interFontThin = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter-thin",
  weight: "600",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: {
    default: "Website Name",
    template: "%s | title",
  },
  description: "",
  keywords: ["", "", "", "", "", "", ""],
  authors: [{ name: "", url: "" }],
  openGraph: {
    title: "",
    description: "",
    url: "",
    siteName: "",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tintitpro.netlify.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Tint it Pro - Window Tint & Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tint it Pro",
    description: "We are the best at installing window tint and marble protection films.",
    images: ["https://tintitpro.netlify.app/images/logo.png"],
    creator: "@tintitpro",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://tintitpro.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFontBold.variable} ${interFontThin.variable}`}>
      <body>
        <ThemeProviderWrapper>  
          <Header />        
          {children}
          <Footer2 />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
