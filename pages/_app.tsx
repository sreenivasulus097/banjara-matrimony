import { wrapper } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Provider } from "react-redux";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
      <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" />
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}
