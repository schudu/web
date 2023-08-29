import { useEffect } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

interface Props {
  title: string;
  open: boolean;
  onClose: Function;
  children: React.ReactFragment;
}

export default function popup({ title, open, onClose, children }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "visible";
  }, [open]);

  return (
    <PopupContainer>
      <PopupItSelf>
        <Header>
          <Heading>{title}</Heading>
          <CloseButton size={24} onClick={() => onClose(false)} />
        </Header>
        <Devider />
        {children}
      </PopupItSelf>
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupItSelf = styled.div`
  border: none;
  border-radius: 15px;
  background-color: var(--white);
  padding: 15px;
`;

const Header = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const CloseButton = styled(IoClose)`
  cursor: pointer;
  transition: all 0.2 ease;

  &:hover {
    scale: 110%;
  }

  &:active {
    scale: 90%;
  }
`;

const Devider = styled.div`
  width: 95%;
  height: 1px;
  background: var(--orange);
  margin: 10px auto;
`;
