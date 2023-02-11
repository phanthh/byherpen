import { createGlobalStyle } from "styled-components";
import { color, font, unit } from "./tokens";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${font.abel};
		color: ${color.fg200};
    background: ${color.bg200};
    transition: all 250ms ease-in-out;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
