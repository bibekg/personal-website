import * as React from "react";
import { css } from "@emotion/react";

import favicon from "../assets/images/favicon.png";
import { sizes } from "../styles";

export default () => (
  <img
    css={css({
      width: sizes.logo,
      height: sizes.logo,
    })}
    src={favicon}
  />
);
