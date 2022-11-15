import { useTranslation } from "react-i18next";
import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import styled from "styled-components";
import axios from "axios";

import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";
import Input from "~/components/Input";
import { Error } from "~/styles/Globalstyles";
import { useEffect, useState } from "react";
import TypeCheck from "~/services/typeCheck";

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

export const loader: LoaderFunction = ({ params }) => {
  return params.code;
};

export default function passwordForgotten() {
  let { t } = useTranslation("account");
  let { t: errors } = useTranslation("error");
  let { t: common } = useTranslation();

  const code = useLoaderData();
  const navigate = useNavigate();

  const [resetted, setResetted] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordConf, setPasswordConf] = useState<string>("");
  const [error, setError] = useState<{
    general: string;
    password: string;
    passwordConf: string;
  }>({});

  useEffect(() => {
    console.log("hi");
    axios.get("/auth/resetpassword/" + code).catch((err) => {
      if (err.toJSON().message === "Network Error")
        return setError({
          ...error,
          general: errors("offline"),
        });

      switch (parseInt(err.response.status)) {
        case 400:
          setError({ ...error, general: errors("resetpassword.invalid_id") });
          break;
        case 403:
          navigate("/dashboard");
          break;
        case 500:
          setError(errors("500"));
          break;
      }
    });
  }, []);

  const handlePasswordConfirm = () => {
    if (password != passwordConf) {
      setError({ ...error, passwordConf: errors("passwordConf.notEquals") });
      return false;
    }
    return true;
  };

  const handleInputError = (
    errorr: Array<{ where: string; error: string } | undefined>
  ) => {
    var err = { ...error };
    for (let er of errorr) {
      if (!er) continue;
      err[er.where] = errors(`${er.where}.${er.error}`);
    }
    setError(err);
  };

  const handleReset = () => {
    if (!handlePasswordConfirm()) return;

    let error = [];
    error.push(new TypeCheck(password).isPassword());
    error.push(
      !passwordConf ? { where: "passwordConf", error: "missing" } : undefined
    );

    error = error.filter((e) => e != null);

    if (error.length) return handleInputError(error);

    axios
      .put("/auth/resetpassword/" + code, {
        password,
      })
      .then((res) => setResetted(true))
      .catch((err) => {
        if (err.toJSON().message === "Network Error")
          return setError({
            ...error,
            general: errors("offline"),
          });

        switch (parseInt(err.response.status)) {
          case 400:
            handleInputError([err.response.data]);
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
          <LoginImage src="/images/password-forgotten.svg" />
        </LeftContent>
        <RightContent>
          <FormContainer>
            <PreHeading>{t("not_good")}</PreHeading>
            <Heading>{t("forgot_password")}</Heading>
            {error.general && (
              <>
                <Error>{error.general}</Error>
                <Button
                  primary
                  text={common("reset")}
                  link="/password-forgotten"
                  style={{ float: "left", marginTop: "10px" }}
                />
              </>
            )}
            {!error.general && !resetted && (
              <>
                <div>
                  <Input
                    heading={t("new_password")}
                    value={password}
                    onChange={(e: any) => {
                      setPassword(e.target.value);
                      setError({ ...error, password: "" });
                    }}
                    error={error.password}
                    type="password"
                  />
                  <PasswordRequirements>
                    <PassRequItem color={password.length >= 8}>
                      8+ {t("characters")}
                    </PassRequItem>
                    <PassRequItem color={/[#?!$ %^&*-]/.test(password)}>
                      1+ {t("special_characters")}
                    </PassRequItem>
                    <PassRequItem color={/[0-9]/.test(password)}>
                      1+ {t("numbers")}
                    </PassRequItem>
                    <PassRequItem color={/[a-z]/.test(password)}>
                      1+ {t("lower_case_letters")}
                    </PassRequItem>
                    <PassRequItem color={/[A-Z]/.test(password)}>
                      1+ {t("upper_case_letters")}
                    </PassRequItem>
                  </PasswordRequirements>
                </div>
                <Input
                  heading={t("confirm_new_password")}
                  error={error.passwordConf}
                  value={passwordConf}
                  onChange={(e: any) => {
                    setPasswordConf(e.target.value);
                    setError({ ...error, passwordConf: "" });
                  }}
                  onBlur={handlePasswordConfirm}
                  type="password"
                />
                <Button
                  primary
                  text={common("reset")}
                  onClick={handleReset}
                  style={{ float: "right", marginTop: "10px" }}
                />
              </>
            )}
            {resetted && (
              <>
                <p>{t("password_reset_success")}</p>
                <Button
                  primary
                  text={common("login")}
                  link="/login"
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

const PasswordRequirements = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--light);
  font-size: 12px;
  margin-top: 10px;
`;

const PassRequItem = styled.small`
  color: ${({ color }: { color: boolean }) =>
    color ? "var(--green)" : "var(--light)"};
`;
