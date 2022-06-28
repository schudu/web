import styled from "styled-components";

import { InnerLayout } from "~/styles/Layouts";
import { SecondaryHeading, SubHeading } from "~/styles/Globalstyles";

export default function MobileSection() {
  return (
    <InnerLayout>
      <AboutContainer id="about">
        <LeftContent>
          <SecondaryHeading>About Us</SecondaryHeading>
          <SubHeading>
            I am a Student who often forgets Homeworks and other Dates. In my
            School we use multiple different Platforms to manage the Documents
            and Homework submissions. So I wanted something where everything is
            in One Place so that I can keep the overview easily.
          </SubHeading>
        </LeftContent>
        <RightContent>
          <Image src="/images/booking.png" />
        </RightContent>
      </AboutContainer>
    </InnerLayout>
  );
}

const AboutContainer = styled("section")`
  /* background-color: var(--white);
  border-radius: 50px;
  padding: 2rem 2rem 0 2rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-gap: 2rem;
  @media screen and (max-width: 845px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LeftContent = styled("div")``;

const RightContent = styled("div")`
  display: grid;
  place-items: center;
`;

const Image = styled("img")`
  width: 100%;
`;
