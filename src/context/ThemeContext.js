import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a context for the color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("dark");

  // Toggle function for switching between light and dark mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Create a theme based on the current mode (light/dark) and add custom colors
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#6d28d9" : "#6d28d9", // Custom primary colors for light/dark
            contrastText: "#fff",
          },
          secondary: {
            main: mode === "light" ? "#4338ca" : "#4338ca", // Custom secondary colors for light/dark
            contrastText: "#fff",
          },
          textPrimary: { main: mode === "light" ? "#000000" : "#ffffff", contrastText: "fff" }, // Custom text color for light/dark
          textSecondary: { main: mode === "light" ? "#4338ca" : "#6d28d9", contrastText: "fff" }, // Custom text color for light/dark
        },
        typography: {
          fontFamily: "Roboto, sans-serif", // Define your global font here
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
