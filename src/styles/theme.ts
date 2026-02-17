export const lightTheme = {
  colors: {
    background: "#fcfcfc",
    surface: "#ffffff",
    text: "#111111",
    subText: "#666666",
    border: "#e5e5e5",
    hover: "#f0f0f4",
  },
  typography: {
    hero: "40px",
    h1: "32px",
    h2: "24px",
    body: "16px",
    small: "14px",
  },
};

export const darkTheme = {
  colors: {
    background: "#282828",
    surface: "#424242",
    text: "#ffffff",
    subText: "#d3d3d3",
    border: "#717171",
    hover: "#333333",
  },
  typography: {
    hero: "40px",
    h1: "32px",
    h2: "24px",
    body: "16px",
    small: "14px",
  },
};

export type ThemeType = typeof lightTheme;
