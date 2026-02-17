"use client";

import { Global, css, useTheme } from "@emotion/react";

export default function GlobalStyle() {
  const theme = useTheme() as any;

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.2s ease;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  );
}
