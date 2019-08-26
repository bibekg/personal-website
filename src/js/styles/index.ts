import { css } from "styled-components";
import { rgba } from "polished";

export const colors = {
  blue: "rgb(70,80,223)",
  green: "#28a639",
  white: "#fefeff",
  black: "#50514f",
  grey: "#7e807d",
  lightGrey: "#d4dad1",
  almostWhite: "rgba(200,200,200,0.5)",
  offWhite: "#FEFBFA",
  body: "#50514F"
};

export const fonts = {
  serif: "Lora",
  "sans-serif": "Open Sans"
};

export const shadows = {
  default: "0px 2px 8px 2px rgba(0, 0, 0, 0.25)",
  light: "0px 2px 8px 2px rgba(0, 0, 0, 0.15)",
  blue: `0px 2px 8px 2px ${rgba(colors.blue, 0.45)}`,
  lightBlue: `0px 2px 8px 2px ${rgba(colors.blue, 0.15)}`
};

export const breakpoints = {
  medium: "650px"
};

export const sizes = {
  profilePicWidth: "40vw",
  logo: "60px"
};

export const typography: Typography = {
  base: {
    color: colors.grey,
    "font-family": `"${fonts["sans-serif"]}", sans-serif`,
    "font-size": "1.2rem"
  },
  h1: {
    "font-size": "2em",
    color: colors.blue,
    "font-weight": "bold"
  },
  p: {
    "line-height": "1.5em"
  },
  a: {
    "text-decoration": "underline",
    color: colors.blue,
    "font-weight": "bold"
  }
};

interface Typography {
  base: { [s: string]: string };
  h1: { [s: string]: string };
  p: { [s: string]: string };
  a: { [s: string]: string };
}

export const mixins = {
  onMobile: (mixin: any) => css`
    @media (max-width: ${breakpoints.medium}) {
      ${mixin}
    }
  `
};
