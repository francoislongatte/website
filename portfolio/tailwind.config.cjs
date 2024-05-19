const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("node:path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname),
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        layoutMobile: [
          "exp technology",
          "calendar linkedin",
          "cv cv",
          "contact contact",
        ],
        layout: [
          "exp exp git . linkedin calendar",
          "technology technology technology contact cv map",
        ],
      }
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/typography"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
};
