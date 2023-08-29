import styled from "styled-components";

import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <HeaderContainer>
      <Background />
      <NavBar />
      <HeaderContent />
    </HeaderContainer>
  );
}

const HeaderContainer = styled("header")`
  width: 100%;
  height: 100%;
  padding-bottom: 8rem;
`;

const Background = styled("div")`
  width: 100%;
  height: 50vw;
  max-height: 100vh;
  min-height: 550px;
  background-image: url("/images/background_v1_wave.png");
  background-position-y: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media screen and (max-width: 960px) {
    height: 700px;
  }
`;
