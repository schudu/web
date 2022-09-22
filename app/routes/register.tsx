import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";
import Input from "~/components/Input";

export const meta: MetaFunction = () => ({
  title: "Register - Schudu",
  "og:title": `Register`,
  "og:url": "/register",
  description: `Register now to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "og:description": `Register now to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:title": `Register`,
  "twitter:description": `Register now to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:card": "summary",
});

export default function register() {
  let { t } = useTranslation("account");
  let { t: common } = useTranslation();
  return (
    <RegisterContainer>
      <NavBar smallNav />
      <SiteContainer>
        <LeftContent>
          <FormContainer>
            <PreHeading>{t("everything_free")}</PreHeading>
            <Heading>{common("register")}</Heading>
            <LoginContainer>
              <LoginQuestion>{t("already_user")}</LoginQuestion>
              <LoginLink to="/login">{common("login")}</LoginLink>
            </LoginContainer>
            <InputContainer>
              <Input heading={common("username")} />
              <NameContainer>
                <Input
                  heading={common("firstname")}
                  hint={t("only_teacher_can_see")}
                />
                <Input heading={common("lastname")} />
              </NameContainer>
              <Input heading={common("email")} />
              <Input heading={common("password")} />
            </InputContainer>
            <Button
              primary
              text={common("register")}
              style={{ float: "right", marginTop: "10px" }}
            />
          </FormContainer>
        </LeftContent>
        <RightContent>
          <RegisterImage src="/images/welcome.svg" />
        </RightContent>
      </SiteContainer>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
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
    flex-direction: column;
    padding-top: 80px;
    height: 100%;
  }
`;

const LeftContent = styled.div`
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

const RightContent = styled.div`
  height: 100vh;
  width: 50%;
  background-image: url("/images/background_v2_wave.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50%;
  background-position-x: right;
  display: flex;
  align-items: flex-end;
  padding: 0 8vw 10vh 3vw;
  rotate: 180deg;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    background-image: url("/images/background_v1_wave.png");
    background-position: bottom;
    display: flex;
    align-items: start;
    padding: 10px;
  }
`;

const RegisterImage = styled.img`
  max-width: 100%;
  rotate: 180deg;

  @media screen and (max-width: 900px) {
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

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
`;

const LoginQuestion = styled.span`
  font-size: 11px;
`;

const LoginLink = styled(Link)`
  font-size: 11px;
  color: blue;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-bottom: 25px;
`;
