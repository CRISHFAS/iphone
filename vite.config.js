import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "pear-ca",
      project: "javascript-react",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    })
  ],
  build: {
    sourcemap: true
  }
});
