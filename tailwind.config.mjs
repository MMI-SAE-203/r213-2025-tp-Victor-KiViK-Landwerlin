/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				"rainbow":{
					"0%": {color: "red"},
					"20%": {color: "orange"},
					"40%": {color: "yellow"},
					"60%": {color: "green"},
					"80%": {color: "blue"},
					"100%": {color: "purple"},
				}
		},
	},
	plugins: [],
}
}