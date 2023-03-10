import { createTheme } from "@mui/material/styles";

export default function ToggleColorMode() {
 const [mode, setMode] = React.useState("light");
 const colorMode = React.useMemo(
  () => ({
   toggleColorMode: () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
   },
  }),
  []
 );

 const theme = React.useMemo(
  () =>
   createTheme({
    palette: {
     mode,
    },
   }),
  [mode]
 );

 return colorMode && theme;
}
