import "@/styles/globals.css";
import "@/styles/prosemirror.css";
import "katex/dist/katex.min.css";

import type { AppProps } from "next/app";

import { Button } from "@/components/tailwind/ui/button";
import Menu from "@/components/tailwind/ui/menu";
import ToastProvider from "@/components/ToastProvider";
import { ReduxProvider } from "@/lib/redux/provider";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "App Todo", href: "/app-todo" },
  { label: "Page todo", href: "/todo" },
  { label: "App Blog", href: "/app-blog" },
  { label: "Page Blog", href: "/blog" },
];
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="_app container mx-auto p-4">
      <ReduxProvider>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          defaultTheme="system"
        >
          <ToastProvider />
          <div className="flex min-h-screen flex-col items-center">
            <div className="flex w-full max-w-2xl items-center gap-2">
              {menuItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  <Button variant="ghost">{item.label}</Button>
                </Link>
              ))}

              <Link href="/editor" className="ml-auto">
                <Button variant="ghost">Editor</Button>
              </Link>
              <Menu />
            </div>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </ReduxProvider>
    </div>
  );
}
