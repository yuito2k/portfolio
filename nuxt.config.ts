// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['./app/assets/css/main.css'],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	modules: [
		'@nuxt/hints',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/fonts',
		'@nuxt/ui'
	],
	fonts: {
		provider: 'google',
  	},
})
