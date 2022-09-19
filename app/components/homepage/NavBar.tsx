import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link, useFetcher } from "@remix-run/react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import Button from "../Button";

interface Props {
  smallNav?: boolean;
  route?: string;
}

export default function NavBar({ smallNav, route }: Props) {
  const fetcher = useFetcher();

  let { t } = useTranslation("homepage");
  let { t: common, i18n } = useTranslation();

  const [click, setClick] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const handleClick = () => setClick(!click);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
      //console.log("true");
    } else {
      setColorchange(false);
      //console.log("false");
    }
  };

  const handleLanguageChange = (e: any) => {
    if (language !== e.target.innerText.toLowerCase()) {
      setLanguage(e.target.innerText.toLowerCase());
      fetcher.submit(
        { lang: e.target.innerText.toLowerCase(), route },
        { method: "post", action: "/?index" }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <NavbarWrapper className={colorChange ? "bg" : ""}>
      <NavbarContainer>
        <NavLogoContainer to="">
          <NavLogo src="/images/logo.svg" alt="LOGO" />
          <NavName>SCHUDU</NavName>
        </NavLogoContainer>
        {!smallNav && (
          <>
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
                <Button
                  link="https://schudu.com/login"
                  text={common("login")}
                  navBtn
                  primary
                />
              </NavListItemBtn>
            </NavItemList>
          </>
        )}
      </NavbarContainer>
      <LangSwitch>
        <LangSwitchItem>{language.toUpperCase()}</LangSwitchItem>
        <LangSwitchList className="switchList">
          <LangSwitchItem onClick={handleLanguageChange}>DE</LangSwitchItem>
          <LangSwitchItem onClick={handleLanguageChange}>EN</LangSwitchItem>
        </LangSwitchList>
      </LangSwitch>
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

export const LangSwitch = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  background: var(--yellow);
  border-radius: 10px;
  margin-top: 15px;
  margin-right: 20px;
  width: 50px;
  cursor: pointer;
  z-index: 1001;

  &:hover .switchList {
    opacity: 1;
  }

  @media screen and (max-width: 750px) {
    right: 15%;
  }
`;

export const LangSwitchList = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  overflow: hidden;
  background: var(--orange);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  width: 100%;
`;

export const LangSwitchItem = styled("h3")`
  padding: 0 10px;
  width: 100%;
  text-align: center;
  width: 100%;
  height: 50px;
  display: grid;
  place-items: center;

  &:hover {
    transform: scale(1.03);
    filter: brightness(97%);
  }
`;
function useRouteData() {
  throw new Error("Function not implemented.");
}
