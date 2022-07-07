import { redirect } from "@remix-run/node";

import { OuterLayout } from "~/styles/Layouts";
import Header from "~/components/homepage/Header";
import Footer from "~/components/homepage/Footer";
import MobileSection from "~/components/homepage/MobileSection";
import AboutSection from "~/components/homepage/AboutSection";
import PriceSection from "~/components/homepage/PriceSection";
import { userLanguage } from "~/cookies";

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

  return redirect("/", {
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
          <AboutSection />
          <MobileSection />
          <PriceSection />
        </main>
      </OuterLayout>
      <Footer />
    </>
  );
}
