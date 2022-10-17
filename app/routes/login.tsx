import { useTranslation } from "react-i18next";
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styled from "styled-components";

import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";
import Input from "~/components/Input";

export const meta: MetaFunction = () => ({
  title: "Login - Schudu",
  "og:title": `Login`,
  "og:url": "/login",
  description: `Log now in to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "og:description": `Log now in to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:title": `Login`,
  "twitter:description": `Log now in to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:card": "summary",
});

export default function login() {
  let { t } = useTranslation("account");
  let { t: common } = useTranslation();
  return (
    <LoginContainer>
      <NavBar smallNav />
      <SiteContainer>
        <LeftContent>
          <LoginImage src="/images/login.svg" />
        </LeftContent>
        <RightContent>
          <FormContainer>
            <PreHeading>{t("everything_free")}</PreHeading>
            <Heading>{common("login")}</Heading>
            <RegisterContainer>
              <RegisterQuestion>{t("no_user_yet")}</RegisterQuestion>
              <RegisterLink to="/register">{common("register")}</RegisterLink>
            </RegisterContainer>
            <InputContainer>
              <Input heading={`${common("email")} / ${common("username")}`} />
              <Input heading={common("password")} />
            </InputContainer>
            <ForgottenContainer>
              <RegisterQuestion>{t("password_forgotten")}</RegisterQuestion>
              <RegisterLink to="#">{common("reset")}</RegisterLink>
            </ForgottenContainer>
            <Button primary text={common("login")} style={{ float: "right" }} />
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

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
`;

const RegisterQuestion = styled.span`
  font-size: 11px;
`;

const RegisterLink = styled(Link)`
  font-size: 11px;
  color: blue;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;

const ForgottenContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;
