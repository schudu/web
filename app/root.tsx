import { json, MetaFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

import GlobalStyles from "./styles/Globalstyles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Schudu",
  "og:title": `Schudu`,
  viewport: "width=device-width,initial-scale=1",
  "og:url": "/",
  "og:site_name": "Schudu",
  "og:image": "/images/logo_gelb.png",
  description: `Your Homework Planner to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "og:description": `Your Homework Planner to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:title": `Schudu`,
  "twitter:description": `Your Homework Planner to manage Homework, Dates and Learningmaterial for the whole Class!`,
  robots: "index, follow",
});

type LoaderData = { locale: string };

export let loader: LoaderFunction = async ({ request }: any) => {
  let locale = await i18next.getLocale(request);
  return json<LoaderData>({ locale });
};

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export default function App() {
  // Get the locale from the loader
  let { locale } = useLoaderData<LoaderData>();

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Nunito:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <GlobalStyles />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
