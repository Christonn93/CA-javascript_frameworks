// Importing react elements
import { createContext, useState, useMemo } from "react";

// Importing MUI
import { createTheme } from "@mui/material/styles";

/**
 * Looked at a tutorial to create this theme.
 *
 *
 */

// Color tokens
export const tokens = (mode) => ({
 ...(mode === "dark"
  ? {
     grey: {
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414",
     },
     primary: {
      100: "#d0d1d5",
      200: "#a1a4ab",
      300: "#727681",
      400: "#1F2A40",
      500: "#141b2d",
      600: "#101624",
      700: "#0c101b",
      800: "#080b12",
      900: "#040509",
     },
     secondary: {
      100: "#d4d3d7",
      200: "#a8a7ae",
      300: "#7d7b86",
      400: "#514f5d",
      500: "#262335",
      600: "#1e1c2a",
      700: "#171520",
      800: "#0f0e15",
      900: "#08070b",
     },
     greenAccent: {
      100: "#dbf5ee",
      200: "#b7ebde",
      300: "#94e2cd",
      400: "#70d8bd",
      500: "#4cceac",
      600: "#3da58a",
      700: "#2e7c67",
      800: "#1e5245",
      900: "#0f2922",
     },
     redAccent: {
      100: "#f8dcdb",
      200: "#f1b9b7",
      300: "#e99592",
      400: "#e2726e",
      500: "#db4f4a",
      600: "#af3f3b",
      700: "#832f2c",
      800: "#58201e",
      900: "#2c100f",
     },
     blueAccent: {
      100: "#000914",
      200: "#001228",
      300: "#001c3b",
      400: "#00254f",
      500: "#002e63",
      600: "#335882",
      700: "#6682a1",
      800: "#99abc1",
      900: "#ccd5e0",
     },
    }
  : {
     grey: {
      100: "#141414",
      200: "#292929",
      300: "#3d3d3d",
      400: "#525252",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0",
     },
     primary: {
      100: "#040509",
      200: "#080b12",
      300: "#0c101b",
      400: "#f2f0f0", // manually changed
      500: "#141b2d",
      600: "#1F2A40",
      700: "#727681",
      800: "#a1a4ab",
      900: "#d0d1d5",
     },
     greenAccent: {
      100: "#0f2922",
      200: "#1e5245",
      300: "#2e7c67",
      400: "#3da58a",
      500: "#4cceac",
      600: "#70d8bd",
      700: "#94e2cd",
      800: "#b7ebde",
      900: "#dbf5ee",
     },
     redAccent: {
      100: "#2c100f",
      200: "#58201e",
      300: "#832f2c",
      400: "#af3f3b",
      500: "#db4f4a",
      600: "#e2726e",
      700: "#e99592",
      800: "#f1b9b7",
      900: "#f8dcdb",
     },
     blueAccent: {
      100: "#ccd5e0",
      200: "#99abc1",
      300: "#6682a1",
      400: "#335882",
      500: "#002e63",
      600: "#00254f",
      700: "#001c3b",
      800: "#001228",
      900: "#000914",
     },
    }),
});

// MUI Theme settings
export const themeSettings = (mode) => {
 const colors = tokens(mode);

 return {
  palette: {
   mode: mode,
   ...(mode === "dark"
    ? {
       primary: {
        main: colors.primary[500],
       },
       secondary: {
        main: colors.greenAccent[500],
       },
       cta: {
        main: colors.blueAccent[300],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "#253f58",
       },
      }
    : {
       primary: {
        main: colors.primary[100],
       },
       secondary: {
        main: colors.greenAccent[500],
       },
       cta: {
        main: colors.blueAccent[400],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "#fcfcfc",
       },
      }),
  },
  typography: {
   fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
   fontSize: 12,
   h1: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 40,
   },
   h2: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 32,
   },
   h3: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 24,
   },
   h4: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 20,
   },
   h5: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 16,
   },
   h6: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 14,
   },
  },
  breakpoints: {
   values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
   },
  },
 };
};

// Color mode context
export const ColorModeContext = createContext({
 toggleColorMode: () => {},
});

export const useMode = () => {
 const [mode, setMode] = useState("dark");

 const colorMode = useMemo(
  () => ({
   toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
  }),
  []
 );

 const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
 return [theme, colorMode];
};
