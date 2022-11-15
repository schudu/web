import { useState } from "react";
import styled from "styled-components";

interface Props {
  value: boolean;
  onChange: Function;
}

export default function Switch({ value = false, onChange }: Props) {
  return (
    <SwitchContainer active={value} onClick={() => onChange(!value)}>
      <SwitchHandle active={value} />
    </SwitchContainer>
  );
}

const SwitchContainer = styled.div`
  width: 40px;
  height: 23px;
  border: none;
  border-radius: 99999px;
  background: var(--light);
  position: relative;
  display: flex;
  background-color: ${({ active }: { active: boolean }) =>
    active ? "var(--green)" : "var(--light)"};
  align-items: center;
  transition: all 0.4s ease;
`;

const SwitchHandle = styled.div`
  height: 18px;
  width: 18px;
  border: none;
  border-radius: 99999px;
  background: var(--white);
  margin-left: ${({ active }: { active: boolean }) => (active ? "49%" : "3px")};
  transition: all 0.4s ease;
`;
