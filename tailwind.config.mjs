/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			screens: {

				"mac": "1440px"

			},
			colors: {

				"mc_slate": "#5b626d",
				"mc_black_": "#222b37",
				"mc_red": "#fd515b",
				"mc_light_gray": "#f8f9fa",
				"mc_gray": "#c9c9c9",
				"mc_black": "#12171f"
			},

			fontFamily: {

				"merriweather": ["Merriweather", "serif"]

			}
		},
	},
	plugins: [require("tailwindcss-animate")],
}
