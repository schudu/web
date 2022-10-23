import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { createRef, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "~/components/Button";
import NavBar from "~/components/homepage/NavBar";

export const meta: MetaFunction = () => ({
  title: "Email Verification - Schudu",
  "og:title": `Email Verification`,
  "og:url": "/emailverification",
  description: `Register now to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "og:description": `Register now to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:title": `Email Verification`,
  "twitter:description": `Register now to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:card": "summary",
});

export default function emailVerification() {
  let { t } = useTranslation("account");
  let { t: common } = useTranslation();

  const [error, setError] = useState<string>("");

  const inputs = useRef([0, 1, 2, 3, 4, 5].map(() => createRef()));

  useEffect(() => {
    for (let el in inputs.current) {
      const elem: any = inputs.current[el].current;
      elem.addEventListener("keyup", (e: any) => {
        handleOtp(e, el);
      });
      elem.addEventListener("paste", (e: any) => {
        handleOnPasteOtp(e);
      });
    }
  }, []);

  const handleOtp = (e: any, index: string) => {
    setError("");
    const input: any = inputs.current[parseInt(index)].current;
    let value: string = input.value;
    input.value = "";
    input.value = value ? value[0] : "";

    if (value.length > 0 && parseInt(index) < inputs.current.length - 1) {
      const sibling: any = inputs.current[parseInt(index) + 1].current;
      sibling.focus();
      sibling.select();
    }

    if (e.key === "Backspace" && parseInt(index) > 0) {
      const sibling: any = inputs.current[parseInt(index) - 1].current;
      sibling.focus();
    }

    if (parseInt(index) >= inputs.current.length - 1 && e.key !== "Backspace") {
    }
  };

  const handleOnPasteOtp = (e: any) => {
    setError("");
    const data: string = e.clipboardData.getData("text");
    const value: Array<string> = data.split("");
    if (value.length === inputs.current.length) {
      for (let el in inputs.current) {
        const elem: any = inputs.current[el].current;
        elem.value = value[parseInt(el)];
      }
      const elem: any = inputs.current[inputs.current.length - 1].current;
      elem.focus();
    }
  };

  return (
    <RegisterContainer>
      <NavBar smallNav />
      <SiteContainer>
        <LeftContent>
          <FormContainer>
            <PreHeading>{t("check_inbox")}</PreHeading>
            <Heading>{t("email_verification")}</Heading>
            <QuestionContainer>
              <Question>{t("nothing_received")}</Question>
              <QuestionLink to="/login">{t("resend")}</QuestionLink>
            </QuestionContainer>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <InputContainer>
              <CodeInput ref={inputs.current[0]} />
              <CodeInput ref={inputs.current[1]} />
              <CodeInput ref={inputs.current[2]} />
              <CodeInput
                ref={inputs.current[3]}
                style={{ marginLeft: "15px" }}
              />
              <CodeInput ref={inputs.current[4]} />
              <CodeInput ref={inputs.current[5]} />
            </InputContainer>
            <QuestionContainer style={{ marginTop: "15px" }}>
              <Question>
                {t("is_email_right", { email: "svolec19@htl-kaindorf.at" })}
              </Question>
              <QuestionLink to="/profile">{common("change")}</QuestionLink>
            </QuestionContainer>
            <Button
              primary
              text={common("confirm")}
              style={{ float: "right", marginTop: "25px" }}
            />
          </FormContainer>
        </LeftContent>
        <RightContent>
          <RegisterImage src="/images/verify.svg" />
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
  align-items: flex-start;
  padding: 0 8vw 10vh 3vw;
  rotate: 180deg;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    background-image: url("/images/background_v1_wave.png");
    background-position: bottom;
    display: flex;
    align-items: start;
    padding: 0 10px 20px 10px;
  }
`;

const RegisterImage = styled.img`
  max-width: 100%;
  rotate: 180deg;
  height: 30vw;

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

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
`;

const Question = styled.span`
  font-size: 11px;
`;

const QuestionLink = styled(Link)`
  font-size: 11px;
  color: blue;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 25px;
  width: 100%;
`;

const CodeInput = styled.input`
  padding: 8px 0;
  border: 4px solid var(--orange);
  border-radius: 18px;
  width: 100%;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  transition: all 0.1s ease;

  &:focus {
    box-shadow: 0 0 2px 2px var(--orange);
  }
`;
