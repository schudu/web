import styled from "styled-components";

interface Props {
  heading?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: Function;
  style?: object;
  className?: string;
}

export default function Input({
  placeholder,
  heading,
  hint,
  error,
  type = "text",
  value,
  onChange,
  onBlur,
  style,
  className,
}: Props) {
  return (
    <InputContainer style={style}>
      {heading && <Heading>{heading}</Heading>}
      <InputFeld
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
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

const InputFeld = styled.input`
  background: transparent;
  font-size: 16px;
  width: 100%;
  padding: 2px 0;
  outline: none;
  border: none;
  border-bottom: 2px solid var(--yellow);
  transition: 0.2s all ease;

  &:focus {
    border-bottom: 2px solid var(--orange);
  }
`;

const Hint = styled.small`
  color: var(--light);
  font-size: 12px;
`;

const Error = styled.small`
  color: red;
`;
