import * as React from "react";
import styled from "styled-components";

import Text from "./Text";

interface Props {
  ownLine?: boolean;
}

const Wrapper = styled.a`
  ${Text} {
    margin-left: 2px;
  }
  display: ${(props: Props) => (props.ownLine ? "block" : "inline-flex")};
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  height: 1em;
`;

const LinkedText = (props: any) => (
  <Wrapper href={props.href} ownLine={props.ownLine}>
    {props.icon}
    <Text as="span" inline styleAsLink={props.href}>
      {props.children}
    </Text>
  </Wrapper>
);

export default LinkedText;
