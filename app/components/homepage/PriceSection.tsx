import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { InnerLayout } from "~/styles/Layouts";
import PriceCard from "./PriceCard";

export let handle = {
  i18n: "homepage",
};

export default function PriceSection() {
  let { t } = useTranslation("homepage");
  let { t: common } = useTranslation();
  return (
    <InnerLayout>
      <PriceContainer id="pricing">
        <PriceCard
          name={t("pricing.free.name")}
          price={0}
          timespan={"/" + t("pricing.month")}
          description={t("pricing.free.description")}
          button={common("getstarted")}
          onClick={() => {
            console.log("hi");
          }}
          features={[
            {
              name: t("pricing.homework"),
              available: true,
            },
            {
              name: t("pricing.quiz"),
              available: true,
            },
            {
              name: t("pricing.calendar"),
              available: true,
            },
            {
              name: t("pricing.submithw"),
              available: true,
            },
            {
              name: t("pricing.filestorage"),
              available: true,
            },
          ]}
        />
        <PriceCard
          name={t("pricing.premium.name")}
          price={2.99}
          timespan={"/" + t("pricing.month")}
          description={t("pricing.premium.description")}
          button={common("gopremium")}
          onClick={() => {
            console.log("hi");
          }}
          features={[
            {
              name: t("pricing.homework"),
              available: true,
            },
            {
              name: t("pricing.quiz"),
              available: true,
            },
            {
              name: t("pricing.calendar"),
              available: true,
            },
            {
              name: t("pricing.submithw"),
              available: true,
            },
            {
              name: t("pricing.filestorage"),
              available: true,
            },
            {
              name: t("pricing.no-ads"),
              available: true,
            },
          ]}
        />
      </PriceContainer>
    </InnerLayout>
  );
}

const PriceContainer = styled("section")`
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
