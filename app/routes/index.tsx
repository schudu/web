import styled from "styled-components";

import { OuterLayout } from "~/styles/Layouts";
import Header from "~/components/homepage/Header";
import Footer from "~/components/homepage/Footer";
import MobileSection from "~/components/homepage/MobileSection";
import PriceSection from "~/components/homepage/PriceSection";

export default function Index() {
  return (
    <>
      <Header />
      <OuterLayout>
        <main>
          <MobileSection />
          <PriceSection />
        </main>
      </OuterLayout>
      <Footer />
    </>
  );
}
