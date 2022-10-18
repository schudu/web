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

  return <DashboardContainer>Dashboard</DashboardContainer>;
}

const DashboardContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
