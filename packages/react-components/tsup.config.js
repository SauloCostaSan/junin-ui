import { defineConfig } from "tsup";

export default defineConfig({
  loader: {
    ".jpg": "base64",
    ".webp": "file",
    ".css": "file",
    ".scss": "file",
  },
});
