import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  metadataBase: new URL("https://raghav.sh"),
  title: { default: "raghav pillai" },
  description: "about raghav",
  keywords: ["raghav pillai", "raghav", "pillai", "cyber defense", "y combinator", "speck"],
  openGraph: {
    title: "raghav pillai",
    description: "about raghav",
    url: "https://raghav.sh",
    siteName: "raghav pillai",
    images: [{ url: "https://raghav.sh/web-banner.png", width: 1200, height: 630, alt: "raghav" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "raghav pillai",
    description: "about raghav",
    siteId: "1467726470533754880",
    images: ["https://raghav.sh/web-banner.png"],
    creator: "@rag_pil",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: { index: true, follow: true, noimageindex: false, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono bg-[#0a0a0c] text-[#d4d4d4] min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
