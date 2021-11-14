import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import { DarkTheme as PaperDarkTheme } from "react-native-paper";

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const theme = CombinedDarkTheme;

export default theme;
