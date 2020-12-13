import * as React from "react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
} from "styled-system";
import { Link as ReactRouterLink } from "react-router-dom";
import theme from "src/styles/theme";

const linkBaseStyles = (props: LinkStyleProps) => ({
  textDecoration: props.underline ? "underline" : "none",
  color: props.color ? props.color : theme.colors.grey,
  "&:hover": {
    color: props.hoverColor ? props.hoverColor : theme.colors.blue,
  },
  transition: "0.3s ease color",
});

interface LinkStyleProps extends SpaceProps, LayoutProps, PositionProps, TypographyProps {
  underline?: boolean;
  color?: string;
  hoverColor?: string;
  as?: any;
  overrideStyles?: any;
}

// We sometimes want to style Links identically to the way we style
// Buttons so this component creates an easy-use adapter via
// the asButton, buttonStyle, and buttonSize props

// We export both an internal and external link from this file
// They are styled identically but are based on a different
// underlying component (<a /> vs React Router's <Link />) so
// the styled component definition args are identical
const args = [
  space,
  position,
  layout,
  typography,
  (props: LinkStyleProps) => linkBaseStyles(props),
  (props: LinkStyleProps) => props.overrideStyles,
] as const;

interface InternalLinkProps extends React.ComponentProps<typeof ReactRouterLink>, LinkStyleProps {}

const ExternalLink = styled("a", {
  shouldForwardProp: (prop) => isPropValid(String(prop)) && prop !== "noUnderline",
})<LinkStyleProps>(...args);
const InternalLink = styled<typeof ReactRouterLink>(ReactRouterLink, {
  shouldForwardProp: (prop) => isPropValid(String(prop)) && prop !== "noUnderline",
})<InternalLinkProps>(...args);

interface UnifiedLinkProps extends InternalLinkProps, LinkStyleProps {
  to: React.ComponentProps<typeof ReactRouterLink>["to"];
  type?: "internal" | "external";
  ref?: any;
}

const isExternalLink = (to: React.ComponentProps<typeof ReactRouterLink>["to"]): to is string => {
  return typeof to === "string" && (to.startsWith("http") || to.startsWith("mailto"));
};

// An isomorphic Link component where the link is always passed in via the "to" prop so that you
// don't have to decide whether to pass in "to" for the react-router InternalLink or "href" for
// the traditional <a /> ExternalLink
const UnifiedLink = ({ to, ref, defaultValue, referrerPolicy, ...props }: UnifiedLinkProps) => {
  // TODO: Figure out how to properly pass ref through, hasn't been necessary yet so punting on this
  return to != null && isExternalLink(to) ? (
    <ExternalLink ref={ref} {...props} href={to} />
  ) : (
    <InternalLink {...props} to={to} defaultValue={defaultValue} referrerPolicy={referrerPolicy} />
  );
};

UnifiedLink.defaultProps = {
  fontWeight: 600,
};

export { ExternalLink, InternalLink, UnifiedLink as Link };
export default UnifiedLink;
