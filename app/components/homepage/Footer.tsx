import { Link } from "@remix-run/react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBackground>
      <FooterContainer>
        <LeftContent>
          <FooterLinkList>
            <li>
              <FooterListItemLink to="">Login</FooterListItemLink>
            </li>
            <li>
              <FooterListItemLink to="">Register</FooterListItemLink>
            </li>
            <li>
              <FooterListItemLink to="">Connect With Us</FooterListItemLink>
            </li>
            <li>
              <FooterListItemLink to="">Register As School</FooterListItemLink>
            </li>
          </FooterLinkList>
        </LeftContent>
        <RightContent>
          <NavLogo src="/images/logo.svg" alt="LOGO" />
          <NavName>SCHUDU</NavName>
        </RightContent>
      </FooterContainer>
    </FooterBackground>
  );
}

const FooterBackground = styled("footer")`
  width: 100vw;
  height: 80vh;
  background-image: url("/images/background_v1_wave.png");
  background-position-y: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(180deg);
`;

const FooterContainer = styled("div")`
  transform: rotate(180deg);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const LeftContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 3rem 3rem;
`;

const RightContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 3rem;
`;

const NavLogo = styled("img")``;

const NavName = styled("h1")`
  font-weight: bold;
  font-size: 4rem;
  font-family: "Bungee", "Nunito", sans-serif;
`;

const FooterLinkList = styled("ul")``;

const FooterListItemLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.5rem;
`;
