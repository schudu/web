import { Link } from "@remix-run/react";
import styled from "styled-components";

import { Button } from "~/styles/Globalstyles";

export default function NavBar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavLogoContainer to="">
          <NavLogo src="/images/logo.svg" alt="LOGO" />
          <NavName>SCHUDU</NavName>
        </NavLogoContainer>
        <NavItemList>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="#mobile">Mobile</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="#pricing">Pricing</Link>
          </li>
        </NavItemList>
        <Button>Login</Button>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled("div")`
  width: 100%;
  display: grid;
  place-items: center;
`;

const NavbarContainer = styled("nav")`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 80%;
  margin-top: 40px;
  align-items: center;
`;

const NavLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const NavLogo = styled("img")`
  height: 40px;
  margin-right: 10px;
`;

const NavName = styled("h2")`
  font-weight: bold;
  font-family: "Bungee", "Nunito", sans-serif;
`;

const NavItemList = styled("ul")`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
