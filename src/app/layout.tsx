import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Walaa Khalil Al-Adrah | Interior Designer & 3D Visualizer | ولاء خليل العدرة",
  description:
    "Editorial portfolio of Walaa Khalil Al-Adrah — Interior Designer specializing in residential & commercial interiors, outdoor furniture design, 3D visualization, space planning, and materiality in Amman, Jordan.",
  keywords: [
    "Interior Designer",
    "Walaa Khalil Al-Adrah",
    "ولاء خليل العدرة",
    "تصميم داخلي",
    "3D Visualization",
    "Outdoor Furniture Design",
    "Space Planning",
    "Amman Jordan",
    "Architecture Portfolio",
  ],
  authors: [{ name: "Walaa Khalil Al-Adrah" }],
  openGraph: {
    title: "Walaa Khalil Al-Adrah | Interior Designer",
    description:
      "Interior environments shaped by light, material, function, and emotion. Amman, Jordan.",
    url: "https://walaakhalil.design",
    siteName: "Walaa Khalil Al-Adrah Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${inter.variable} ${cairo.variable} ${tajawal.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
