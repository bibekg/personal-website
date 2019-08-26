import styled, { css } from "styled-components";

import profilePicImage from "../assets/images/profile.jpg";
import { mixins, sizes } from "../styles";

// To position a circle in a corner so that it's tucked in just right :)
export const picturePositioningCalc = `calc(
  calc(${sizes.profilePicWidth} - calc(${sizes.profilePicWidth} / ${Math.sqrt(2)})) / 2
)`;

const ProfilePic = styled.img.attrs({
  src: profilePicImage
})`
  width: ${sizes.profilePicWidth};
  max-width: 500px;
  border-radius: 50%;
`;

export default ProfilePic;
