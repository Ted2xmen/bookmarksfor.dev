import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const title = "Articles and Tools for Javascript Developers";
const description =
  "Useful Articles and Tools for Javascript Developers - curated by Ted2xmen";

export const metadata: Metadata = {
  metadataBase: new URL("https://bookmarks.dev"),
  themeColor: "black",
  alternates: {
    canonical: "/",
  },
  title,
  description,
  openGraph: {
    images: "/opengraph-image.png",
    title,
    description,
    locale: "en_US",
    authors: ["Ted2xmen"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  verification: {
    google: "G-Y3J8G8MFWP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Ted2xmen" />
        <meta
          name="keywords"
          content="React, NextJS, Vue, Svelte, Nuxt, JavaScript"
        />

        <script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="9960a80d-9a47-41a5-86f1-b3bfaaecc53d"
        ></script>
      </Head>
      <body className={roboto.className}>
        <Hero />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="flex justify-center">
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
