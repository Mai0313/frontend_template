import { env } from "@/utils/env";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: env.WEBSITE_TITLE,
  description: "A modern Frontend Template built with HeroUI and Vite.",
  navItems: [],
  navMenuItems: [],
  links: {
    github: "https://github.com/Mai0313",
    discord: "mai9999",
  },
};
