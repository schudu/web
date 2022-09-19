import { Link } from "@remix-run/react";
import styled from "styled-components";

interface Props {
  text: string;
  link?: string;
  style?: object;
  onClick?: React.MouseEventHandler;
  navBtn?: boolean;
  primary?: boolean;
}

export default function Button({
  text,
  link,
  style,
  onClick,
  navBtn,
  primary,
}: Props) {
  return (
    <ButtonContainer
      className={(navBtn ? "navBtn" : "") + (primary ? " primary" : "")}
      style={style}
      onClick={onClick}
    >
      {text && !link && <ButtonText>{text}</ButtonText>}
      {link && !link.startsWith("http") && (
        <ButtonLink to={link}>{text}</ButtonLink>
      )}
      {link && link.startsWith("http") && (
        <ButtonExternalLink href={link}>{text}</ButtonExternalLink>
      )}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  background-color: transparent;
  padding: 0.7rem 2rem;
  border-radius: 18px;
  border: 4px solid var(--orange);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
    outline: none;
  }

  &:active {P
    transform: scale(0.95);
    filter: brightness(97%);
    outline: none;
  }

  &.navBtn {
    @media screen and (max-width: 960px) {
      width: 100%;
      height: 100%;
    }
  }

   &.primary {
    background-color: var(--orange);
    border: none;
   }
`;

const ButtonText = styled.span`
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  white-space: nowrap;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  white-space: nowrap;
`;

const ButtonExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  white-space: nowrap;
`;
