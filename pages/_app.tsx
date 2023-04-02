import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" />
      <Component {...pageProps} />;
    </>
  );
}
