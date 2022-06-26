import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import GlobalStyles from "./styles/Globalstyles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Schudu",
  "og:title": `Schudu`,
  viewport: "width=device-width,initial-scale=1",
  "og:url": "https://new.schudu.com/",
  "og:site_name": "Schudu",
  "og:image": "/images/logo_gelb.png",
  description: `Your Homework Planner to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "og:description": `Your Homework Planner to manage Homework, Dates and Learningmaterial for the whole Class!`,
  "twitter:title": `Schudu`,
  "twitter:description": `Your Homework Planner to manage Homework, Dates and Learningmaterial for the whole Class!`,
  robots: "index, follow",
});

export default function App() {
  return (
    <html lang="en">
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
