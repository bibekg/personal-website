import styled, { css } from "styled-components";

import profilePicImage from "../images/profile.jpg";
import { mixins, sizes } from "../styles";

// To position a circle in a corner so that it's tucked in just right :)
export const picturePositioningCalc = `calc(
  calc(${sizes.profilePicWidth} - calc(${sizes.profilePicWidth} / ${Math.sqrt(2)})) / 2
)`;

const ProfilePic = styled.img.attrs({
  src: profilePicImage
})`
  position: absolute;
  max-width: 500px;
  width: ${sizes.profilePicWidth};
  border-radius: 50%;
  top: calc(-1 * ${picturePositioningCalc});
  right: calc(-1 * ${picturePositioningCalc});
  opacity: 0.5;

  ${mixins.onMobile(css`
    display: none;
  `)};
`;

export default ProfilePic;
