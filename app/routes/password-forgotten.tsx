import { useTranslation } from "react-i18next";
import { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";
import Input from "~/components/Input";
import TypeCheck from "~/services/typeCheck";
import { Error } from "~/styles/Globalstyles";

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
  let { t: errors } = useTranslation("error");
  let { t: common } = useTranslation();

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<{ global: string; email: string }>({});
  const [sent, setSent] = useState<boolean>(false);

  const handleInputError = (err: { where: string; error: string }) => {
    setError({ ...error, email: errors(`${err.where}.${err.error}`) });
  };

  const handleSubmit = () => {
    let error = new TypeCheck(email).isEmail();

    if (error) return handleInputError(error);

    axios
      .get("/auth/resetpassword", { params: { email: email } })
      .then((res) => {
        setSent(true);
        console.log(res);
      })
      .catch((err) => {
        if (err.toJSON().message === "Network Error")
          return setError({ ...error, global: errors("offline") });

        switch (parseInt(err.response.status)) {
          case 400:
            setError({
              ...error,
              email: errors(`${err.body.where}.${err.body.error}`),
            });
            break;
          case 403:
            navigate("/dashboard");
            break;
          case 500:
            setError({ ...error, global: errors("500") });
            break;
        }
      });
  };

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
            {error.global && <Error>{error.global}</Error>}
            {!sent ? (
              <>
                <Input
                  heading={common("email")}
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                    setError({ ...error, email: "" });
                  }}
                  error={error.email}
                  style={{ marginTop: "25px" }}
                />
                <Button
                  primary
                  text={common("reset")}
                  onClick={handleSubmit}
                  style={{ float: "right", marginTop: "10px" }}
                />
              </>
            ) : (
              <>
                <EmailSent>{t("resetEmailSent", { email })}</EmailSent>
                <Button
                  primary
                  text={t("change_email")}
                  onClick={() => setSent(false)}
                  style={{ float: "left", marginTop: "10px" }}
                />
              </>
            )}
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

const EmailSent = styled.p`
  margin: 25px 0;
`;
