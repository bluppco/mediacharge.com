import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  	integrations: [tailwind(), react(), mdx()],
  	output: "server",
  	adapter: cloudflare({
	routes: {
		exclude: ["/icons/*", "/fonts/*"]
	},
    runtime: {
      	mode: 'local',
      	type: 'pages'
    }
  }),
});
