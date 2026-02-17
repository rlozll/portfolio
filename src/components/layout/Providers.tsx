"use client";

import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import TopBar from "./TopBar";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setIsDark(true);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <TopBar isDark={isDark} toggleTheme={toggleTheme} />

      {children}
    </ThemeProvider>
  );
}
