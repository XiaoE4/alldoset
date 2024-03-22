// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: [// ...
		'@pinia/nuxt',
		'@element-plus/nuxt',
		'@vueuse/nuxt',
		'@ant-design-vue/nuxt'
	],
	css: [
		'element-plus/dist/index.css',
		'~/style.css'
	],
	elementPlus: { /** Options */}
})