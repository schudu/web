import { useTranslation } from "react-i18next";
import { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { TiTick } from "react-icons/ti";

import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";
import Input from "~/components/Input";
import TypeCheck from "~/services/typeCheck";
import { Error } from "~/styles/Globalstyles";

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
  let { t: errors } = useTranslation("error");
  let { t: common } = useTranslation();

  const navigate = useNavigate();

  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("/whoami")
      .then((res) => navigate("/dashboard"))
      .catch((err) => {
        if (err.toJSON().message === "Network Error")
          return setError(errors("offline"));

        switch (parseInt(err.response.status)) {
          case 500:
            setError(errors("500"));
            break;
        }
      });
  }, []);

  const handleLogin = () => {
    if (
      (new TypeCheck(account).isEmail() != null ||
        new TypeCheck(account).isUsername() != null) &&
      new TypeCheck(password).isPassword() != null
    ) {
      return setError(errors("wrong_login_data"));
    }

    axios
      .post("/auth/login", {
        password,
        account,
        remember,
      })
      .then((res) => {
        if (!res.data.emailVerified) return navigate("/emailverification");
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.toJSON().message === "Network Error")
          return setError(errors("offline"));

        switch (parseInt(err.response.status)) {
          case 400:
          case 401:
          case 415:
            setError(errors("wrong_login_data"));
            break;
          case 403:
            navigate("/dashboard");
            break;
          case 500:
            setError(errors("500"));
            break;
        }
      });
  };

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
            {error && <Error>{error}</Error>}
            <InputContainer>
              <Input
                heading={`${common("email")} / ${common("username")}`}
                value={account}
                onChange={(e: any) => {
                  setAccount(e.target.value);
                  setError("");
                }}
              />
              <Input
                heading={common("password")}
                value={password}
                type="password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
            </InputContainer>
            <RememberContainer onClick={() => setRemember(!remember)}>
              <RememberBox active={remember}>
                <RememberTick size={24} />
              </RememberBox>
              <RememberText>Remember me</RememberText>
            </RememberContainer>
            <ForgottenContainer>
              <RegisterQuestion>{t("password_forgotten")}</RegisterQuestion>
              <RegisterLink to="/password-forgotten">
                {common("reset")}
              </RegisterLink>
            </ForgottenContainer>
            <Button
              primary
              text={common("login")}
              style={{ float: "right" }}
              onClick={handleLogin}
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

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
`;

const RegisterQuestion = styled.span`
  font-size: 12px;
`;

const RegisterLink = styled(Link)`
  font-size: 12px;
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

const RememberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  width: 100%;
  margin: 10px 0;
`;

const RememberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  width: 15px;
  border-radius: 2px;
  border: 2px solid var(--light);
  background-color: ${({ active }: { active: boolean }) =>
    active ? "var(--yellow)" : "transparent"};
  transition: all 0.2s ease;

  & > * {
    opacity: ${({ active }: { active: boolean }) => (active ? "1" : "0")};
  }
`;

const RememberTick = styled(TiTick)`
  color: var(--dark);
  font-weight: bold;
  transition: all 0.2s ease;
`;

const RememberText = styled.span`
  font-size: 14px;
`;
