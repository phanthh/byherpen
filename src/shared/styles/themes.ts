import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  name: "light",
  colors: {
    primary100: "#D4B2A7",
    primary200: "#D4B2A7",
    primary300: "#D4B2A7",

    secondary100: "#A38F85",
    secondary200: "#A38F85",
    secondary300: "#A38F85",

    fg100: "#373737",
    fg200: "#272727",
    fg300: "#000000",

    bg100: "#E7D7C9",
    bg200: "#E7D7C9",
    bg300: "#E7D7C9",
  },
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  colors: {
    primary100: "#2e2c29",
    primary200: "#A38F85",
    primary300: "#A38F85",

    secondary100: "#D4B2A7",
    secondary200: "#D4B2A7",
    secondary300: "#D4B2A7",

    fg100: "#FFFFFF",
    fg200: "#F1F1F1",
    fg300: "#E8E8E8",

    bg100: "#2e2c29",
    bg200: "#272727",
    bg300: "#272727",
  },
};
