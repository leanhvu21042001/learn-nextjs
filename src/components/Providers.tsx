import { ThemeProvider } from "next-themes";
import { ReduxProvider } from "./ReduxProvider";
import { ToastProvider } from "./ToastProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange
        defaultTheme="system"
      >
        <ToastProvider />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};
