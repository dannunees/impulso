import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { useEffect } from "react";
import "./../styles/index.css";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--open-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className={openSans.variable}>
      <Component {...pageProps} />
    </main>
  );
}
