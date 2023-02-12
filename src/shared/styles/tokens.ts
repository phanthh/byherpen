import { DefaultTheme } from "styled-components";

export const unit = {
  p1: "4px",
  p2: "6px",
  p3: "10px",
  p4: "18px",
  p5: "26px",
  p6: "34px",
  p7: "52px",
  m0: "2px",
  m1: "6px",
  m2: "10px",
  m3: "18px",
  m4: "26px",
  m5: "36px",
  m6: "52px",
  m7: "80px",
  r1: "2px",
  r2: "4px",
  r3: "8px",
  r4: "14px",
  r5: "20px",
  f1: "12px",
  f2: "16px",
  f3: "18px",
  f4: "24px",
  f5: "32px",
  f6: "52px",
  f7: "72px",
  f8: "96px",
  lh: "40px",
  mobile: "576px",
  tablet: "768px",
  desktop: "1080px",
} as const;

export const font = {
  roboto: "'Roboto', sans-serif",
  anton: "'Anton', sans-serif",
  shalimar: "'Shalimar', cursive",
  aurore: "'La Belle Aurore', cursive",
  abel: "'Abel', sans-serif",
} as const;

export const shadow = {
  s1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  s2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  s3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  s4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  s5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
} as const;

const themed =
  (key: keyof DefaultTheme["colors"]) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.colors[key];

export const color = {
  primary100: themed("primary100"),
  primary200: themed("primary200"),
  primary300: themed("primary300"),

  secondary100: themed("secondary100"),
  secondary200: themed("secondary200"),
  secondary300: themed("secondary300"),

  fg100: themed("fg100"),
  fg200: themed("fg200"),
  fg300: themed("fg300"),

  bg100: themed("bg100"),
  bg200: themed("bg200"),
  bg300: themed("bg300"),

  frosted: "rgba(0,0,0,0.05)",

  red300: "#f3184d",
  red200: "#f98ba6",
  red100: "#fddce4",

  yellow300: "#ffbe4d",
  yellow200: "#F9DBA8",
  yellow100: "#e3d6c0",

  blue300: "#1A20A6",
  blue200: "#6067EF",
  blue100: "#B9BCFA",

  green300: "#53e967",
  green200: "#6ecf7b",
  green100: "#9fd5a6",

  purple300: "#8127EA",
  purple200: "#A161F6",
  purple100: "#C5A1F7",

  gray900: "#000000",
  gray800: "#272727",
  gray700: "#373737",
  gray600: "#615D5D",
  gray500: "#A3A3A3",
  gray400: "#C4C4C4",
  gray300: "#D7D7D7",
  gray200: "#E8E8E8",
  gray100: "#FFFFFF",
} as const;
