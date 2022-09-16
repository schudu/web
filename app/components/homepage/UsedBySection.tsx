import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { InnerLayout } from "~/styles/Layouts";
import { SubHeading } from "~/styles/Globalstyles";

export let handle = {
  i18n: "homepage",
};

export default function UserBySection() {
  return (
    <InnerLayout>
      <UsedContainer>
        <SubHeading>Used By:</SubHeading>
        <ImageItem src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/HTL_Kaindorf_Logo.svg/600px-HTL_Kaindorf_Logo.svg.png" />
        <ImageItem src="https://www.klusemann.at/wp-content/uploads/2020/09/kluselogo_name-1.png" />
      </UsedContainer>
    </InnerLayout>
  );
}

const UsedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`;

const ImageItem = styled.img`
  height: 70px;
`;
