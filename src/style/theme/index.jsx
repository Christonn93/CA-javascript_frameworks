import { GlobalContext } from "./style/theme/GlobalContext";

const currentTheme = useContext(GlobalContext);

let theme;
switch (currentTheme.theme) {
  case "dark":
    theme = DarkTheme;
    break;
  case "light":
    theme = LightTheme;
    break;
  default:
    theme = LightTheme;
}

// https://dev.to/holdmypotion/react-theme-switcher-5d2a