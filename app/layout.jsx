import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import HeaderDefault from "@/components/headers/default/HeaderDefault";
import FooterDefault from "@/components/footers/default/FooterDefault";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MenuBar from "@/components/menuBar/MenuBar";
import Marque from "@/components/widgets/marque/Marque";
import { Suspense } from "react";
import metadataJson from "@/metadata/id.json";
import { getMessages } from "next-intl/server";
config.autoAddCss = false;

const robotoFont = Roboto_Condensed({
  weight: ["300", "400", "700"], // Specify the weights you need
  subsets: ["latin"],
  display: "swap", // Recommended for better performance
  variable: "--font-roboto-condensed",
});

export const metadata = metadataJson;

export default function RootLayout({ children, modal }) {
  return (
    <Suspense>
      <NextIntlClientProvider>
        <html lang="en">
          <body className={`${robotoFont.variable} antialiased bodyheight`}>
            <header className="bg-(--header-bg) text-(--header-color) sticky top-0 z-50">
              <HeaderDefault></HeaderDefault>
            </header>
            <Marque></Marque>

            <main>
              {modal}
              {children}
            </main>
            <footer>
              <FooterDefault></FooterDefault>
            </footer>
            <MenuBar></MenuBar>
          </body>
        </html>
      </NextIntlClientProvider>
    </Suspense>
  );
}
