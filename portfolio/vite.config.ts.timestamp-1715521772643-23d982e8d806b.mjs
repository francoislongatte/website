// portfolio/vite.config.ts
import analog from "file:///Users/francoislongatte/Documents/project/Freelance/website/node_modules/.pnpm/@analogjs+platform@1.3.0_@angular-devkit+build-angular@17.3.6_@angular+compiler-cli@17.3.7_@a_evqsbcxqlwyyvttaeldaqsje2q/node_modules/@analogjs/platform/src/index.js";
import { defineConfig, splitVendorChunkPlugin } from "file:///Users/francoislongatte/Documents/project/Freelance/website/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.9_less@4.1.3_sass@1.76.0_stylus@0.59.0_terser@5.29.1/node_modules/vite/dist/node/index.js";
import { nxViteTsPaths } from "file:///Users/francoislongatte/Documents/project/Freelance/website/node_modules/.pnpm/@nx+vite@18.3.4_@babel+traverse@7.24.5_@types+node@20.12.9_nx@18.3.1_typescript@5.3.3_vite@5._qw55laip2dv4z4vh2lqikujjgi/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var __vite_injected_original_dirname = "/Users/francoislongatte/Documents/project/Freelance/website/portfolio";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    root: __vite_injected_original_dirname,
    publicDir: "src/public",
    build: {
      outDir: "../dist/./portfolio/client",
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ["es2020"]
    },
    server: {
      fs: {
        allow: ["."]
      }
    },
    plugins: [
      analog({
        prerender: {
          sitemap: {
            host: "https://yourdomain.com/"
            // Don't forget to update your domain!
          }
        }
      }),
      nxViteTsPaths(),
      splitVendorChunkPlugin()
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
      cache: {
        dir: `../node_modules/.vitest`
      }
    },
    define: {
      "import.meta.vitest": mode !== "production"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ZyYW5jb2lzbG9uZ2F0dGUvRG9jdW1lbnRzL3Byb2plY3QvRnJlZWxhbmNlL3dlYnNpdGUvcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZnJhbmNvaXNsb25nYXR0ZS9Eb2N1bWVudHMvcHJvamVjdC9GcmVlbGFuY2Uvd2Vic2l0ZS9wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ZyYW5jb2lzbG9uZ2F0dGUvRG9jdW1lbnRzL3Byb2plY3QvRnJlZWxhbmNlL3dlYnNpdGUvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgYW5hbG9nIGZyb20gXCJAYW5hbG9nanMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgUGx1Z2luLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IG54Vml0ZVRzUGF0aHMgfSBmcm9tIFwiQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW5cIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiBfX2Rpcm5hbWUsXG4gICAgcHVibGljRGlyOiBcInNyYy9wdWJsaWNcIixcblxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IFwiLi4vZGlzdC8uL3BvcnRmb2xpby9jbGllbnRcIixcbiAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgICAgY29tbW9uanNPcHRpb25zOiB7IHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlIH0sXG4gICAgICB0YXJnZXQ6IFtcImVzMjAyMFwiXVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBmczoge1xuICAgICAgICBhbGxvdzogW1wiLlwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBhbmFsb2coe1xuICAgICAgICBwcmVyZW5kZXI6IHtcbiAgICAgICAgICBzaXRlbWFwOiB7XG4gICAgICAgICAgICBob3N0OiBcImh0dHBzOi8veW91cmRvbWFpbi5jb20vXCIsIC8vIERvbid0IGZvcmdldCB0byB1cGRhdGUgeW91ciBkb21haW4hXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuXG4gICAgICBueFZpdGVUc1BhdGhzKCksXG4gICAgICBzcGxpdFZlbmRvckNodW5rUGx1Z2luKCksXG4gICAgXSxcbiAgICB0ZXN0OiB7XG4gICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgICAgIHNldHVwRmlsZXM6IFtcInNyYy90ZXN0LXNldHVwLnRzXCJdLFxuICAgICAgaW5jbHVkZTogW1wiKiovKi5zcGVjLnRzXCJdLFxuICAgICAgcmVwb3J0ZXJzOiBbXCJkZWZhdWx0XCJdLFxuICAgICAgY2FjaGU6IHtcbiAgICAgICAgZGlyOiBgLi4vbm9kZV9tb2R1bGVzLy52aXRlc3RgLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmluZToge1xuICAgICAgXCJpbXBvcnQubWV0YS52aXRlc3RcIjogbW9kZSAhPT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE9BQU8sWUFBWTtBQUNuQixTQUFTLGNBQXNCLDhCQUE4QjtBQUM3RCxTQUFTLHFCQUFxQjtBQUo5QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFFWCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixzQkFBc0I7QUFBQSxNQUN0QixpQkFBaUIsRUFBRSx5QkFBeUIsS0FBSztBQUFBLE1BQ2pELFFBQVEsQ0FBQyxRQUFRO0FBQUEsSUFDbkI7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLElBQUk7QUFBQSxRQUNGLE9BQU8sQ0FBQyxHQUFHO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLFdBQVc7QUFBQSxVQUNULFNBQVM7QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFFRCxjQUFjO0FBQUEsTUFDZCx1QkFBdUI7QUFBQSxJQUN6QjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsWUFBWSxDQUFDLG1CQUFtQjtBQUFBLE1BQ2hDLFNBQVMsQ0FBQyxjQUFjO0FBQUEsTUFDeEIsV0FBVyxDQUFDLFNBQVM7QUFBQSxNQUNyQixPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLHNCQUFzQixTQUFTO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
