import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Sidebar from "~/components/app/Sidebar";

export const meta: MetaFunction = () => ({
  title: "Schudu",
  "og:title": `Schudu`,
  "og:url": "/dashboard",
  description: `Schudu`,
  "og:description": `Schudu`,
  "twitter:title": `Schudu`,
  "twitter:description": `Schudu`,
  "twitter:card": "summary",
});

export default function dashboardRoute() {
  let { t } = useTranslation("account");
  let { t: errors } = useTranslation("error");
  let { t: common } = useTranslation();

  return (
    <DashboardContainer>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
