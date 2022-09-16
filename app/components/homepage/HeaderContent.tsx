import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { SubHeading } from "~/styles/Globalstyles";
import { OuterLayout } from "~/styles/Layouts";
import Button from "../Button";

export let handle = {
  i18n: "homepage",
};

export default function HeaderContent() {
  let { t } = useTranslation("homepage");
  let { t: common } = useTranslation();
  return (
    <OuterLayout>
      <HeaderContainer>
        <LeftContent>
          <LeftTextContainer>
            <Heading>
              <BrandName>SCHUDU</BrandName> {t("slogan")}
            </Heading>
            <SubHeading>{t("slogan-paragraph")}</SubHeading>
            <Button text={common("getstarted")} />
          </LeftTextContainer>
        </LeftContent>
        <RightContent>
          <Image src="/images/header_img.svg" alt="student" />
        </RightContent>
      </HeaderContainer>
    </OuterLayout>
  );
}

const HeaderContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  gap: 30px;
  margin-top: 100px;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }
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
  max-width: 500px;
  width: 100%;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;
