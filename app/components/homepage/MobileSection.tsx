import styled from "styled-components";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import { InnerLayout } from "~/styles/Layouts";

export default function MobileSection() {
  return (
    <MobileSectionContainer id="mobil">
      <InnerLayout>
        <MobileContainer>
          <LeftContent>
            <PhoneImage src="/images/phone.png" />
          </LeftContent>
          <RightContent>
            <GooglePlayContainer>
              <FaGooglePlay size={50} />
              <StoreInfos>
                <h4>Google Play</h4>
                <h3>
                  4.8<CommingSoon>(Comming Soon)</CommingSoon>
                </h3>
              </StoreInfos>
            </GooglePlayContainer>
            <AppStoreContainer>
              <FaAppStoreIos size={50} />
              <StoreInfos>
                <h4>Apple App Store</h4>
                <h3>
                  4.9<CommingSoon>(Comming soon)</CommingSoon>
                </h3>
              </StoreInfos>
            </AppStoreContainer>
          </RightContent>
        </MobileContainer>
      </InnerLayout>
    </MobileSectionContainer>
  );
}

const MobileSectionContainer = styled("section")`
  @media screen and (max-width: 1160px) {
    margin-top: 80px;
  }
`;

const MobileContainer = styled("div")`
  background-color: var(--white);
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  padding: 2rem 2rem 0 2rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const LeftContent = styled("div")`
  overflow: hidden;
  max-height: 430px;
  display: grid;
  place-items: center;

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
