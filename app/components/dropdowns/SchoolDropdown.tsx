import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

interface Props {
  items: Array<object>;
  onSelect: Function;
  error?: String;
  hint?: String;
}

export default function SchoolDropdown({ items, onSelect, error, hint }: Props) {
  const [showItems, setShowItems] = useState<Array<object>>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setShowItems(items);
  }, [items]);

  const handleInput = (e: any) => {
    setInput(e.target.value);

    const regex = new RegExp(
      "(" + e.target.value.trim().split(" ").join("|") + ")",
      "i"
    );

    setShowItems(
      e.target.value.trim()
        ? items.filter(
            (i) =>
              regex.test(i.name) ||
              regex.test(i.country) ||
              regex.test(i.city) ||
              regex.test(i.plz != null ? i.plz.toString() : "")
          )
        : items
    );
  };

  const handleSelection = (i: object) => {
    setInput(i.name);
    onSelect(i);
  };

  return (
    <Dropdown
      items={
        <>
          {showItems.map((i: any) => (
            <ListItem
              key={i.name + i.location}
              onClick={() => handleSelection(i)}
            >
              <ListItemAvatar src={i.avatar} alt="LOGO" />
              <ListItemDetails>
                <h5>{i.name}</h5>
                <small>
                  {i.country} - {i.city}
                  {i.plz != null ? ` - ${i.plz}` : ""}
                </small>
              </ListItemDetails>
            </ListItem>
          ))}
        </>
      }
      onInput={handleInput}
      value={input}
      hint={hint}
      error={error}
    />
  );
}

const ListItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
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

const ListItemAvatar = styled.img`
  height: 50px;
`;

const ListItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
