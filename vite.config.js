import { sveltekit } from '@sveltejs/kit/vite';
import { viteImageToAVIFPlugin } from "vite-image-to-avif-plugin";
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		viteImageToAVIFPlugin({
			sourcePaths: ["static"],
			quality: 70,
			outputDir: "static",
		  }),
		sveltekit(),
	]
});
