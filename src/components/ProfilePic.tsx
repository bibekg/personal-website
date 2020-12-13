import * as React from "react";
import { css } from "@emotion/react";

import profilePicImage from "../assets/images/profile.jpg";
import { sizes } from "../styles";

// To position a circle in a corner so that it's tucked in just right :)
export const picturePositioningCalc = `calc(
  calc(${sizes.profilePicWidth} - calc(${sizes.profilePicWidth} / ${Math.sqrt(2)})) / 2
)`;

export default () => (
  <img
    css={css({
      width: sizes.profilePicWidth,
      maxWidth: "500px",
      borderRadius: "50%",
    })}
    src={profilePicImage}
  />
);
