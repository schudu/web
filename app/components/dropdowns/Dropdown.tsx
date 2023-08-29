import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

interface Props {
  heading?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  value?: string;
  onInput: Function;
  style?: object;
  items: React.ReactElement;
}

export default function Dropdown({
  heading,
  placeholder,
  hint,
  error,
  value,
  onInput,
  style,
  items,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <InputContainer style={style}>
      {heading && <Heading>{heading}</Heading>}
      <InputLine>
        <InputFeld
          placeholder={placeholder}
          value={value}
          onChange={(e: any) => {
            onInput(e);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          error={items.length === 0}
        />
        <CollapseButton open={open} size={16} onClick={() => setOpen(!open)} />
        {open && items.length !== 0 && <ItemList>{items}</ItemList>}
      </InputLine>
      {hint && !error && <Hint>{hint}</Hint>}
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

const InputContainer = styled.div``;

const Heading = styled.small`
  color: var(--light);
  font-size: 14px;
`;

const InputLine = styled.div`
  position: relative;
  width: 100%;
`;

const InputFeld = styled.input`
  background: transparent;
  font-size: 16px;
  width: 100%;
  padding: 2px 0;
  outline: none;
  border: none;
  border-bottom: 2px solid
    ${({ error }: { error: boolean }) =>
      error ? "var(--error)" : "var(--yellow)"};
  transition: 0.2s all ease;

  &:focus {
    border-bottom: 2px solid
      ${({ error }: { error: boolean }) =>
        error ? "var(--error)" : "var(--orange)"};
  }
`;

const Hint = styled.small`
  color: var(--light);
  font-size: 12px;
`;

const Error = styled.small`
  color: red;
`;

const CollapseButton = styled(IoIosArrowDown)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  rotate: ${({ open }: { open: boolean }) => (open ? "180deg" : "0")};
  cursor: pointer;
  transition: all 0.2s ease;
`;

const ItemList = styled.div`
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--yellow);
  border-radius: 10px;
  overflow: hidden;
`;

const ListItem = styled.div`
  padding: 10px;
  width: 100%;
  cursor: pointer;
  background: var(--white);
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(85%);
  }
`;
