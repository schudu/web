import { Outlet } from "@remix-run/react";
import styled from "styled-components";
import SettingsBar from "~/components/app/SettingsBar";

export default function settings() {
  return (
    <SettingsContainer>
      <SettingsBar />
      <Section>
        <Outlet />
      </Section>
    </SettingsContainer>
  );
}

const SettingsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
