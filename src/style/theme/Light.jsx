import { createTheme } from "@mui/material/styles";

export const LightTheme = createTheme({
    palette: {
     type: "light",
     primary: {
      main: "#3f51b5",
     },
     secondary: {
      main: "#f50057",
     },
     error: {
      main: "#f44336",
     },
     success: {
      main: "#4caf50",
     },
     warning: {
      main: "#ff9800",
     },
     info: {
      main: "#2196f3",
     },
    },
    typography: {
       h1: {
         fontFamily: 'Tilt Neon',
       },
       h2: {
         fontFamily: 'Tilt Neon',
       },
       fontFamily: 'Tilt Neon',
       fontSize: 16,
     },
     shape: {
       borderRadius: 4,
     },
     props: {
       MuiTooltip: {
         arrow: true,
       },
       MuiAppBar: {
         color: 'default',
       },
       MuiList: {
         dense: true,
       },
       MuiMenuItem: {
         dense: true,
       },
       MuiTable: {
         size: 'small',
       },
     },
   });