import colors from "./colors";

export interface Typography {
  base: { [s: string]: string };
  h1: { [s: string]: string };
  h2: { [s: string]: string };
  p: { [s: string]: string };
  a: { [s: string]: string };
}

export const fonts = {
  serif: "Lora",
  "sans-serif": "Open Sans",
};

export const typography: Typography = {
  base: {
    color: colors.grey,
    "font-family": `"${fonts["sans-serif"]}", sans-serif`,
    "font-size": "1.2rem",
  },
  h1: {
    "font-size": "2em",
    color: colors.blue,
    "font-weight": "bold",
  },
  h2: {
    "font-size": "1.7em",
    color: colors.black,
    "font-weight": "bold",
  },
  p: {
    "line-height": "1.5em",
  },
  a: {
    "text-decoration": "underline",
    color: colors.blue,
    "font-weight": "bold",
  },
};

export default typography;
