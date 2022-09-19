import { redirect } from "@remix-run/node";

import { OuterLayout } from "~/styles/Layouts";
import Header from "~/components/homepage/Header";
import Footer from "~/components/homepage/Footer";
import MobileSection from "~/components/homepage/MobileSection";
import AboutSection from "~/components/homepage/AboutSection";
import PriceSection from "~/components/homepage/PriceSection";
import { userLanguage } from "~/cookies";
import UsedBySection from "~/components/homepage/UsedBySection";

export function meta() {
  return {
    "og:type": "website",
    "twitter:card": "summary_larger_image",
  };
}

export const action = async ({ request }: any) => {
  const formData = await request.formData();

  const cookieHeader = request.headers.get("Cookie");
  let cookie = (await userLanguage.parse(cookieHeader)) || {};

  cookie = formData.get("lang");

  const url = new URL(request.headers.get("referer"));

  return redirect(url.pathname, {
    headers: {
      "Set-Cookie": await userLanguage.serialize(cookie),
    },
  });
};

export default function Index() {
  return (
    <>
      <Header />
      <OuterLayout>
        <main>
          <UsedBySection />
          <AboutSection />
          <MobileSection />
          <PriceSection />
        </main>
      </OuterLayout>
      <Footer />
    </>
  );
}
