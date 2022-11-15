import { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TypeCheck from "~/services/typeCheck";
import { TiTick, TiTickOutline } from "react-icons/ti";
import { FcCancel } from "react-icons/fc";

import styled from "styled-components";
import { Error } from "~/styles/Globalstyles";
import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";
import Input from "~/components/Input";
import axios from "axios";

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
  let { t: errors } = useTranslation("error");
  let { t: common } = useTranslation();

  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConf, setPasswordConf] = useState<string>("");
  const [error, setError] = useState<object>({});
  const [secondPart, setSecondPart] = useState<boolean>(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean>(null);
  const [emailAvailable, setEmailAvailable] = useState<boolean>(null);

  useEffect(() => {
    axios
      .get("/whoami")
      .then((res) => navigate("/dashboard"))
      .catch((error) => {
        console.log(error);
        if (error.toJSON().message === "Network Error")
          return setError({
            ...error,
            global: errors("offline"),
          });
      });
  }, []);

  const handleUsernameCheck = () => {
    let error = [new TypeCheck(username).isUsername()];
    error = error.filter((e) => e != null);

    if (error.length) return handleInputError(error);

    axios
      .get("/auth/available/username", { params: { username } })
      .then((res) => {
        setUsernameAvailable(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.toJSON().message === "Network Error")
          return setError({
            ...error,
            global: error("offline"),
          });

        switch (parseInt(error.response.status)) {
          case 400:
            setUsernameAvailable(false);
            break;
          case 409:
            setUsernameAvailable(false);
            break;
          case 500:
            setError(errors("500"));
            break;
        }
      });
  };

  const handleEmailCheck = () => {
    let error = [new TypeCheck(email).isEmail()];
    error = error.filter((e) => e != null);

    if (error.length) return handleInputError(error);

    axios
      .get("/auth/available/email", { params: { email } })
      .then((res) => {
        setEmailAvailable(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.toJSON().message === "Network Error")
          return setError({
            ...error,
            global: error("offline"),
          });

        switch (parseInt(error.response.status)) {
          case 400:
            setEmailAvailable(false);
            break;
          case 409:
            setEmailAvailable(false);
            break;
          case 500:
            setError(errors("500"));
            break;
        }
      });
  };

  const handleInputError = (
    errs: Array<{ where: string; error: string } | undefined>
  ) => {
    var err = { ...error };
    for (let er of errs) {
      if (!er) continue;

      if (["firstname", "lastname", "username"].includes(er.where))
        setSecondPart(false);

      if (er.where === "username" && er.error === "used") {
        setUsernameAvailable(false);
        continue;
      } else if (er.where === "email" && er.error === "used") {
        setEmailAvailable(false);
        continue;
      }

      err[er.where] = errors(`${er.where}.${er.error}`);
    }
    setError(err);
  };

  const handlePasswordConfirm = () => {
    if (password != passwordConf)
      setError({ ...error, passwordConf: errors("passwordConf.notEquals") });
  };

  const handleNameCheck = () => {
    let error = [new TypeCheck(firstname).isName("firstname")];
    error.push(new TypeCheck(lastname).isName("lastname"));
    error.push(new TypeCheck(username).isUsername());

    error = error.filter((e) => e != null);

    if (error.length) {
      handleInputError(error);
      return setSecondPart(false);
    }
    return setSecondPart(true);
  };

  const handleRegister = () => {
    handleNameCheck();

    let error = [];
    error.push(
      password !== passwordConf
        ? { where: "passwordConf", error: "notEquals" }
        : undefined
    );
    error.push(
      !passwordConf ? { where: "passwordConf", error: "missing" } : undefined
    );
    error.push(new TypeCheck(password).isPassword());
    error.push(new TypeCheck(email).isEmail());

    error = error.filter((e) => e != null);

    if (error.length) return handleInputError(error);

    axios
      .post("/auth/register", {
        firstname,
        lastname,
        email,
        password,
        username,
      })
      .then((res) => {
        navigate("/emailverification");
      })
      .catch((error) => {
        if (error.toJSON().message === "Network Error")
          return setError({
            ...error,
            global: error("offline"),
          });

        switch (parseInt(error.response.status)) {
          case 400:
          case 409:
            handleInputError([error.response.data]);
            break;
          case 403:
            navigate("/dashboard");
            break;
          case 415:
            setError({ ...error, global: errors("415") });
            break;
          case 500:
            setError(errors("500"));
            break;
        }
      });
  };

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
            {error.global && <Error>{error.global}</Error>}
            <InputContainer>
              {!secondPart ? (
                <>
                  <Input
                    heading={common("username")}
                    value={username}
                    onChange={(e: any) => {
                      setUsername(e.target.value);
                      setError({ ...error, username: "" });
                    }}
                    onBlur={handleUsernameCheck}
                    endIcon={
                      (usernameAvailable === true && <Available size={24} />) ||
                      (usernameAvailable === false && (
                        <NotAvailable size={24} />
                      )) || <></>
                    }
                    error={error.username}
                    autofocus
                  />
                  <NameContainer>
                    <Input
                      heading={common("firstname")}
                      value={firstname}
                      onChange={(e: any) => {
                        setFirstname(e.target.value);
                        setError({ ...error, firstname: "" });
                      }}
                      error={error.firstname}
                    />
                    <Input
                      heading={common("lastname")}
                      value={lastname}
                      onChange={(e: any) => {
                        setLastname(e.target.value);
                        setError({ ...error, lastname: "" });
                      }}
                      error={error.lastname}
                    />
                  </NameContainer>
                  <NameHint>{t("only_teacher_can_see")}</NameHint>
                </>
              ) : (
                <>
                  <Input
                    heading={common("email")}
                    value={email}
                    onChange={(e: any) => {
                      setEmail(e.target.value);
                      setError({ ...error, email: "" });
                    }}
                    onBlur={handleEmailCheck}
                    endIcon={
                      (emailAvailable === true && <Available size={24} />) ||
                      (emailAvailable === false && (
                        <NotAvailable size={24} />
                      )) || <></>
                    }
                    error={error.email}
                    type="email"
                    autofocus
                  />
                  <div>
                    <Input
                      heading={common("password")}
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
                    heading={common("password_confirm")}
                    error={error.passwordConf}
                    value={passwordConf}
                    onChange={(e: any) => {
                      setPasswordConf(e.target.value);
                      setError({ ...error, passwordConf: "" });
                    }}
                    onBlur={handlePasswordConfirm}
                    type="password"
                  />
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.BbVy9MrDWfKRqkufwZrzVQHaCC&pid=Api"
                    width={250}
                  />
                </>
              )}
            </InputContainer>
            <ButtonContainer>
              <Button
                primary
                text={secondPart ? common("register") : common("next")}
                onClick={secondPart ? handleRegister : handleNameCheck}
              />
              {secondPart && (
                <Button
                  primary
                  text={common("back")}
                  onClick={() => setSecondPart(false)}
                />
              )}
            </ButtonContainer>
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
  font-size: 12px;
`;

const LoginLink = styled(Link)`
  font-size: 12px;
  color: blue;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-top: 10px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  & > * {
    width: 100%;
  }
`;

const NameHint = styled.small`
  color: var(--light);
  font-size: 12px;
  margin-bottom: 25px;
`;

const PasswordRequirements = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--light);
  font-size: 12px;
  margin-top: 10px;
`;

const PassRequItem = styled.small`
  color: ${({ color }) => (color ? "var(--green)" : "var(--light)")};
`;

const Available = styled(TiTickOutline)`
  color: var(--green);
  height: 100%;
`;

const NotAvailable = styled(FcCancel)`
  height: 100%;
`;
