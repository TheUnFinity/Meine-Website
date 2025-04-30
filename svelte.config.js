import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: "/theunfinity.github.io"  //GitHub Pages base path
		  },
		alias: {
			"@/*": "./path/to/lib/*",
		  },
	}
};

export default config;
