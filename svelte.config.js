import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: "/theunfinity.github.io"  // Required for GitHub Pages
    },
    alias: {
      $components: "src/components",
      $lib: "src/lib"
    }
  }
};

export default config;
