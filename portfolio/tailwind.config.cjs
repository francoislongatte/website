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
          "name name",
          "exp technology",
          "calendar linkedin",
          "cv cv",
          "contact contact",
          " . .",
          "footer footer"
        ],
        layout: [
          "name name name name name name name name",
          ". exp exp git . linkedin calendar .",
          ". technology technology technology contact cv map .",
          "footer footer footer footer footer footer footer footer",
        ],
      },
      gridTemplateColumns: {
        layoutMobile: "1fr",
        layout: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      },
      gridTemplateRows: {
        layoutMobile: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        layout: "1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/typography"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
};
