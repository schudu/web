import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

import { Button } from "~/styles/Globalstyles";

export let handle = {
  i18n: "homepage",
};

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNavbarColor = () => {
    console.log(colorChange);
    if (window.scrollY >= 80) {
      setColorchange(true);
      //console.log("true");
    } else {
      setColorchange(false);
      //console.log("false");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  let { t } = useTranslation("homepage");
  let { t: common } = useTranslation();
  return (
    <NavbarWrapper className={colorChange ? "bg" : ""}>
      <NavbarContainer>
        <NavLogoContainer to="">
          <NavLogo src="/images/logo.svg" alt="LOGO" />
          <NavName>SCHUDU</NavName>
        </NavLogoContainer>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavItemList onClick={handleClick} click={click}>
          <NavListItem>
            <NavLink to="/">{t("home")}</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#about">{t("about-us.heading")}</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#mobile">{t("mobile.heading")}</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="#pricing">{t("pricing.heading")}</NavLink>
          </NavListItem>
          <NavListItemBtn>
            <NavButton>
              <a href="https://schudu.com/login">{common("login")}</a>
            </NavButton>
          </NavListItemBtn>
        </NavItemList>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled("div")`
  width: 100%;
  display: grid;
  place-items: center;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all 0.1s ease-in-out;

  &.bg {
    background-color: var(--yellow);
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  }
`;

const NavbarContainer = styled("nav")`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 80%;
  align-items: center;
  z-index: 1000;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 1001;

  @media screen and (max-width: 960px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
`;

const NavLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 1001;
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
  flex-direction: row;
  list-style: none;
  width: 100%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${({ click }: any) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: var(--yellow);
    padding: 120px 2rem 0 2rem;
  }
`;

const NavListItem = styled.li`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    filter: brightness(97%);
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

const NavListItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: var(--orange);
      transition: all 0.1s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const NavButton = styled(Button)`
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;
