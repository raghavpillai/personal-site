import { Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://raghav.sh"),
  title: {
    default: "raghav pillai",
  },
  description: "about raghav",
  keywords: [
    "raghav pillai",
    "speck",
    "raghav",
    "pillai",
    "cto",
    "y combinator",
    "frontend",
    "ai",
    "llm",
    "speck",
    "paige",
    "paige developer",
    "paige ai developer",
  ],
  openGraph: {
    title: "raghav pillai",
    description: "about raghav",
    url: "https://raghav.sh",
    siteName: "raghav pillai",
    images: [
      {
        url: "https://raghav.sh/web-banner.png",
        width: 1200,
        height: 630,
        alt: "raghav",
      },
    ],
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
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={sourceCodePro.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
