import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { InnerLayout } from "~/styles/Layouts";
import PriceCard from "./PriceCard";
import { useState } from "react";

export let handle = {
  i18n: "homepage",
};

export default function PriceSection() {
  let { t } = useTranslation("homepage");
  let { t: common } = useTranslation();

  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <InnerLayout>
      <PriceContainer id="pricing" ref={ref} className={inView ? "" : "fade"}>
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
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.4s ease;

  &.fade {
    opacity: 0;
    transform: translateY(50px);
  }

  @media screen and (max-width: 1200px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
