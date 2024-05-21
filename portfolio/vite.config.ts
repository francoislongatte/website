/// <reference types="vitest" />

import analog from "@analogjs/platform";
import { defineConfig, Plugin, splitVendorChunkPlugin } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: "src/public",
    optimizeDeps: {
      include: [
        '@angular/common',
        '@angular/forms',
        '@angular/platform-browser/animations',
        '@ng-icons/core',
        '@ng-icons/heroicons',
      ],
    },
    ssr: {
      noExternal: ['tailwindcss/**', '@ng-icons/core', '@ng-icons/heroicons']
    },
    build: {
      outDir: "../dist/./portfolio/client",
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ["es2020"]
    },
    server: {
      fs: {
        allow: ["."],
      },
    },
    plugins: [
      analog({
        prerender: {
          sitemap: {
            host: "https://yourdomain.com/", // Don't forget to update your domain!
          },
        },
      }),

      nxViteTsPaths(),
      splitVendorChunkPlugin(),
      viteCompression()
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
      cache: {
        dir: `../node_modules/.vitest`,
      },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
