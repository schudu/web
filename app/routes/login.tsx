import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styled from "styled-components";
import Button from "~/components/Button";
import Input from "~/components/Input";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Login",
  "og:title": `Login`,
  "og:type": "website",
  viewport: "width=device-width,initial-scale=1",
  "og:url": "/login",
  "og:site_name": "Schudu",
  "og:image": "/images/logo_gelb.png",
  description: `Log now in to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "og:description": `Log now in to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:title": `Login`,
  "twitter:description": `Log now in to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:card": "summary_larger_image",
  robots: "index, follow",
});

export default function login() {
  return (
    <LoginContainer>
      <SiteContainer>
        <LeftContent>
          <LoginImage src="/images/login.svg" />
        </LeftContent>
        <RightContent>
          <FormContainer>
            <PreHeading>Everything Free</PreHeading>
            <Heading>Login</Heading>
            <RegisterContainer>
              <RegisterQuestion>Not Using Schudu yet?</RegisterQuestion>
              <RegisterLink to="/register">Register</RegisterLink>
            </RegisterContainer>
            <InputContainer>
              <Input heading="Email / Username" />
              <Input heading="Password" />
            </InputContainer>
            <ForgottenContainer>
              <RegisterQuestion>Password Forgotten?</RegisterQuestion>
              <RegisterLink to="#">Reset</RegisterLink>
            </ForgottenContainer>
            <Button text="Login" style={{ float: "right" }} />
          </FormContainer>
        </RightContent>
      </SiteContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const SiteContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
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
`;

const RightContent = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginImage = styled.img`
  max-width: 100%;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
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
