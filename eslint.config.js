import kirklin from "@kirklin/eslint-config";

export default kirklin({
  vue: true,
  formatters: {
    css: true,
    markdown: true,
    slidev: {
      files: [
        "talks/*/src/slides.md",
      ],
    },
  },
});
