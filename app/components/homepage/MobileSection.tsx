import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { InnerLayout } from "~/styles/Layouts";

export let handle = {
  i18n: "homepage",
};

export default function MobileSection() {
  let { t } = useTranslation("homepage");

  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <InnerLayout>
      <MobileContainer id="mobile" ref={ref} className={inView ? "" : "fade"}>
        <LeftContent>
          <PhoneImage src="/images/phone.png" />
        </LeftContent>
        <RightContent>
          <GooglePlayContainer>
            <FaGooglePlay size={50} />
            <StoreInfos>
              <h4>Google Play</h4>
              <h3>
                4.8<CommingSoon> ({t("mobile.comming-soon")})</CommingSoon>
              </h3>
            </StoreInfos>
          </GooglePlayContainer>
          <AppStoreContainer>
            <FaAppStoreIos size={50} />
            <StoreInfos>
              <h4>Apple App Store</h4>
              <h3>
                4.9<CommingSoon> ({t("mobile.comming-soon")})</CommingSoon>
              </h3>
            </StoreInfos>
          </AppStoreContainer>
        </RightContent>
      </MobileContainer>
    </InnerLayout>
  );
}

const MobileContainer = styled("section")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-gap: 2rem;

  opacity: 1;
  transform: translateY(0);
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
  overflow: hidden;
  max-height: 430px;
  display: grid;
  place-items: center;
  min-height: 400px;

  @media screen and (max-width: 1060px) {
    height: 40vh;
  }
`;

const RightContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PhoneImage = styled("img")`
  @media screen and (max-width: 1060px) {
    width: 100%;
  }
`;

const GooglePlayContainer = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;

const AppStoreContainer = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 1rem;
`;

const CommingSoon = styled("small")`
  font-weight: 600;
  font-size: 0.8rem;
`;

const StoreInfos = styled("div")`
  margin-left: 1rem;
`;
