const CHUNK_PUBLIC_PATH = "server/app/api/test/route.js";
const runtime = require("../../../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_next_dist_8cdf21._.js");
runtime.loadChunk("server/chunks/[root of the server]__2364e0._.js");
runtime.loadChunk("server/chunks/_f8cdf7._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/api/test/route/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/src/app/api/test/route.ts [app-route] (ecmascript)\" } [app-route] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
