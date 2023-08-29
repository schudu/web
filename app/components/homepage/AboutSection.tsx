import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { InnerLayout } from "~/styles/Layouts";
import { SecondaryHeading, SubHeading } from "~/styles/Globalstyles";
import { useInView } from "react-intersection-observer";

export let handle = {
  i18n: "homepage",
};

export default function MobileSection() {
  let { t } = useTranslation("homepage");

  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <InnerLayout>
      <AboutContainer id="about" ref={ref} className={inView ? "" : "fade"}>
        <LeftContent>
          <SecondaryHeading>{t("about-us.heading")}</SecondaryHeading>
          <SubHeading>{t("about-us.paragraph")}</SubHeading>
        </LeftContent>
        <RightContent>
          <Image src="/images/team.svg" />
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

  opacity: 1;
  transform: translateY(0%);
  transition: all 0.4s ease;

  &.fade {
    opacity: 0;
    transform: translateY(50px);
  }

  @media screen and (max-width: 845px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LeftContent = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RightContent = styled("div")`
  display: grid;
  place-items: center;
`;

const Image = styled("img")`
  width: 100%;
`;
