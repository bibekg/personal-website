import styled from "styled-components";

import favicon from "../images/favicon.png";
import { sizes } from "../styles";

const Logo = styled.img.attrs({
  src: favicon
})`
  position: absolute;
  top: 20px;
  left: 20px;
  width: ${sizes.logo};
  height: ${sizes.logo};
`;

export default Logo;
