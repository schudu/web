import { Link } from "@remix-run/react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <FooterBackground ref={ref} className={inView ? "" : "fade"}>
      <FooterContainer>
        <LeftContent>
          <FooterLinkList>
            <li>
              <FooterListItemLink to="">
                <a href="https://schudu.com/login">Login</a>
              </FooterListItemLink>
            </li>
            <li>
              <FooterListItemLink to="">
                <a href="https://schudu.com/register">Register</a>
              </FooterListItemLink>
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
  width: 100%;
  height: 80vh;
  background-image: url("/images/background_v1_wave.png");
  background-position-y: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  rotate: 180deg;

  opacity: 1;
  transform: translateY(0%);
  transition: all 0.4s ease;

  &.fade {
    opacity: 0;
    transform: translateY(-50px);
  }
`;

const FooterContainer = styled("div")`
  rotate: 180deg;
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
