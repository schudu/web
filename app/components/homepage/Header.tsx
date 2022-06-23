import styled from "styled-components";

import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <HeaderContainer>
      <NavBar />
      <HeaderContent />
    </HeaderContainer>
  );
}

const HeaderContainer = styled("header")`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/background_v1_wave.png");
  background-position-y: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
