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

export default function register() {
  return (
    <RegisterContainer>
      <SiteContainer>
        <LeftContent>
          <FormContainer>
            <PreHeading>Everything Free</PreHeading>
            <Heading>Register</Heading>
            <LoginContainer>
              <LoginQuestion>Already using Schudu?</LoginQuestion>
              <LoginLink to="/login">Login</LoginLink>
            </LoginContainer>
            <InputContainer>
              <Input heading="Username" />
              <NameContainer>
                <Input
                  heading="Firstname"
                  hint="Only Teachers will see your real name!"
                />
                <Input heading="Lastname" />
              </NameContainer>
              <Input heading="Email" />
              <Input heading="Password" />
            </InputContainer>
            <Button
              text="Register"
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
`;

const SiteContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const RegisterImage = styled.img`
  max-width: 100%;
  rotate: 180deg;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
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
  margin-bottom: 35px;
`;

const LoginButton = styled(Button)`
  margin-top: 15px;
  float: right;
`;
