/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Poppins } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component className={poppins.className} {...pageProps} />;
}

export default MyApp;
