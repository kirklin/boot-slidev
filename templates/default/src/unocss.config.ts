import { defineConfig } from "unocss/vite";
import config from "@slidev/client/uno.config";
import presetChinese from "unocss-preset-chinese";

export default defineConfig({
  ...config,
  presets: [...config.presets, presetChinese()] || [],
  shortcuts: {
    ...config.shortcuts || {},
    "text-gradient": "text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500",
  },
});
