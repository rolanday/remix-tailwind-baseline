import { flatRoutes } from "remix-flat-routes";
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  serverModuleFormat: "esm",
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes);
  },
  watchPaths: ["tailwind.config.ts"],
  serverDependenciesToBundle: [],
};
