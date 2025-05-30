import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Menu from "@/components/Menu";
import ToastProvider from "@/components/ToastProvider";
import { ReduxProvider } from "@/lib/redux/provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="_app container mx-auto p-4">
      <ReduxProvider>
        <Menu />
        <ToastProvider />
        <Component {...pageProps} />
      </ReduxProvider>
    </div>
  );
}
