/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {

				"mc_slate": "#5b626d",
				"mc_black": "#222b37"

			},

			fontFamily: {

				"merriweather": [ "Merriweather", "serif" ]

			}

		},
	},
	plugins: [],
}
