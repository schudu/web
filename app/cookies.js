import { createCookie } from "@remix-run/node";

export const userLanguage = createCookie("languange", {
  secure: false,
});
