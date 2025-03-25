import "@/styles/globals.css";
import "@/styles/prosemirror.css";
import "katex/dist/katex.min.css";

import type { AppProps } from "next/app";

import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="_app container mx-auto p-4">
      <Providers>
        <div className="flex min-h-screen flex-col items-center">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </Providers>
    </div>
  );
}
