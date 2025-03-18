import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="_app container mx-auto p-4">
      <Component {...pageProps} />
    </div>
  );
}
