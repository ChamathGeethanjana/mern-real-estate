import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: `${import.meta.env.VITE_BASE_URL}`,
//       },
//     },
//   },
//   plugins: [react()],
// });
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
        },
      },
    },
    plugins: [react()],
  };
});
