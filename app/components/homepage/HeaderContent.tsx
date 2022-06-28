import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { SubHeading, Button } from "~/styles/Globalstyles";

export let handle = {
  i18n: "homepage",
};

export default function HeaderContent() {
  let { t } = useTranslation("homepage");
  return (
    <HeaderContainer>
      <LeftContent>
        <LeftTextContainer>
          <Heading>
            <BrandName>SCHUDU</BrandName> {t("slogan")}
          </Heading>
          <SubHeading>{t("slogan-paragraph")}</SubHeading>
          <Button>Get Started</Button>
        </LeftTextContainer>
      </LeftContent>
      <RightContent>
        <Image src="/images/header_img.png" alt="student" />
      </RightContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10vh;
  flex-wrap: wrap;
  padding: 0 3rem;
`;

const LeftContent = styled("div")`
  @media screen and (max-width: 900px) {
    padding: 0 3rem;
  }
`;

const RightContent = styled("div")``;

const LeftTextContainer = styled("div")``;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
`;

const BrandName = styled("h1")`
  line-height: 5rem;
  font-family: "Bungee", "Nunito", sans-serif;
  font-size: 4rem;
`;

const Image = styled.img`
  max-width: 80vw;
`;
