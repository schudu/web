import styled from "styled-components";

import { InnerLayout } from "~/styles/Layouts";
import PriceCard from "./PriceCard";

export default function PriceSection() {
  return (
    <PriceSectionContainer>
      <InnerLayout>
        <PriceContainer>
          <PriceCard
            name="Free"
            price={0}
            timespan="/month"
            description="Get All Necessary Features Without Paying A Cent!"
            button="Get Started"
            features={[
              {
                name: "Homeworks",
                available: true,
              },
              {
                name: "Quizzes",
                available: true,
              },
              {
                name: "Calendar",
                available: true,
              },
              {
                name: "Uploading Homeworks",
                available: true,
              },
              {
                name: "Filestorage",
                available: false,
              },
            ]}
          />
          <PriceCard
            name="Premium"
            price={2.99}
            timespan="/month"
            description="Go Premium and benefit from extra features!"
            button="Go Premium"
            features={[
              {
                name: "Homeworks",
                available: true,
              },
              {
                name: "Quizzes",
                available: true,
              },
              {
                name: "Calendar",
                available: true,
              },
              {
                name: "Uploading Homeworks",
                available: true,
              },
              {
                name: "Filestorage",
                available: true,
              },
              {
                name: "No Ads",
                available: true,
              },
            ]}
          />
        </PriceContainer>
      </InnerLayout>
    </PriceSectionContainer>
  );
}

const PriceSectionContainer = styled("section")``;

const PriceContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1200px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
