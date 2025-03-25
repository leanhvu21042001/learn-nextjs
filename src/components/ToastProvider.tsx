"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

export const ToastProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system";
  };
  return <Toaster theme={theme} />;
};

