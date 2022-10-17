import { useTranslation } from "react-i18next";
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styled from "styled-components";

import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";
import Input from "~/components/Input";

export const meta: MetaFunction = () => ({
  title: "Password Forgotten - Schudu",
  "og:title": `Password Forgotten`,
  "og:url": "/password-forgotten",
  description: `You have forgotten the Password of your Account? Not Good! But now Problem!`,
  "og:description": `You have forgotten the Password of your Account? Not Good! But now Problem!`,
  "twitter:title": `Password Forgotten`,
  "twitter:description": `You have forgotten the Password of your Account? Not Good! But now Problem!`,
  "twitter:card": "summary",
});

export default function passwordForgotten() {
  let { t } = useTranslation("account");
  let { t: common } = useTranslation();
  return (
    <LoginContainer>
      <NavBar smallNav />
      <SiteContainer>
        <LeftContent>
          <LoginImage src="/images/password-forgotten.svg" />
        </LeftContent>
        <RightContent>
          <FormContainer>
            <PreHeading>{t("not_good")}</PreHeading>
            <Heading>{t("forgot_password")}</Heading>
            <ResetDescription>{t("forgot_description")}</ResetDescription>
            <Input heading={common("email")} style={{ marginTop: "25px" }} />
            <Button
              primary
              text={common("reset")}
              style={{ float: "right", marginTop: "10px" }}
            />
          </FormContainer>
        </RightContent>
      </SiteContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 900px) {
    min-height: 100vh;
  }
`;

const SiteContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 50px;
    padding-top: 80px;
    height: 100%;
  }
`;

const LeftContent = styled.div`
  height: 100vh;
  width: 50%;
  background-image: url("/images/background_v2_wave.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 30%;
  background-position-x: right;
  display: flex;
  align-items: flex-end;
  padding: 0 8vw 0 3vw;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    background-image: url("/images/background_v1_wave.png");
    background-position: bottom;
    rotate 180deg;
    transform: scaleX(-1);
    display: flex;
    align-items: start;
  }
`;

const RightContent = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const LoginImage = styled.img`
  max-width: 100%;

  @media screen and (max-width: 900px) {
    rotate 180deg;
    transform: scaleX(-1);
    float: right;
    height: 30vh;
  }
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 25px;
`;

const PreHeading = styled.h6``;

const Heading = styled.h1``;

const ResetDescription = styled.span`
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;
