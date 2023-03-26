import Layout from "@/components/common/Layout";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Provider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
