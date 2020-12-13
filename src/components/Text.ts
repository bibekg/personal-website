// @flow

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const DEFAULT_COLOR = colors.grey;
const DEFAULT_SIZE = "1em";
const MEDIUM_SIZE = "1.5em";
const LARGE_SIZE = "28em";

interface TextProps {
  as?: keyof typeof typography;
  size?: string;
  color?: string;
  styleAsLink?: boolean;
  inline?: boolean;
}

const getSize = (props: TextProps) => {
  if (props.size) {
    return props.size;
  }
  const semanticFontSize = props.as && typography[props.as] && typography[props.as]["font-size"];
  if (semanticFontSize) {
    return semanticFontSize;
  }
  return DEFAULT_SIZE;
};

const getColor = (props: TextProps) => {
  if (props.color) {
    return props.color;
  }

  const semanticColor = props.as && typography[props.as] && typography[props.as]["color"];
  if (semanticColor) {
    return semanticColor;
  }
  return DEFAULT_COLOR;
};

const typographyStylesCreator = (obj: { [s: string]: string }) => {
  return obj
    ? Object.keys(obj)
        .map((key) => `${key}: ${obj[key]};`)
        .join("\n")
    : "";
};

const getBaseStyles = (props: TextProps) => {
  return typographyStylesCreator(typography.base);
};

const getSemanticStyles = (props: TextProps) => {
  if (props.styleAsLink) {
    return typographyStylesCreator(typography.a);
  }
  if (props.as && typography[props.as]) {
    return typographyStylesCreator(typography[props.as]);
  }
  return "";
};

export default styled.p`
  ${getBaseStyles}
  ${getSemanticStyles}
  ${(props) => {
    const explicitColor = getColor(props);
    return explicitColor ? `color: ${explicitColor}` : "";
  }};
  ${(props: TextProps) =>
    props.inline
      ? css`
          display: inline-block;
        `
      : ""};
`;
