"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

const ToastProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system";
  };
  return <Toaster theme={theme} />;
};

export default ToastProvider;
