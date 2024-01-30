/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {

				"mc_slate": "#5b626d",
				"mc_black": "#222b37",
				"mc_red": "#fd515b",
				"mc_light_gray": "#f8f9fa",
				"mc_gray": "#c9c9c9",

			},

			fontFamily: {

				"merriweather": [ "Merriweather", "serif" ]

			}

		},
	},
	plugins: [],
}
