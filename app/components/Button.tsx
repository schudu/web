import styled from "styled-components";

interface Props {
  text: string;
  style?: object;
  onClick?: React.MouseEventHandler;
}

export default function Button({ text, style, onClick }: Props) {
  return (
    <ButtonContainer style={style} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  background-color: var(--orange);
  padding: 0.7rem 2rem;
  border-radius: 18px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
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
`;

const ButtonText = styled.span`
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  white-space: nowrap;
`;
