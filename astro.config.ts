import { defineConfig } from "astro/config";
import liciousI18n from "@astrolicious/i18n";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    liciousI18n({
      defaultLocale: "en",
      locales: ["en", "fr"],
      pages: {
        "/about": {
          fr: "/a-propos",
        },
      },
    }),
    tailwind(),
  ],
});
