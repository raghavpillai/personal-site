import { Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={sourceCodePro.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
