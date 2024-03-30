// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: [// ...
		'@pinia/nuxt',
		'@element-plus/nuxt',
		'@vueuse/nuxt',
		'@ant-design-vue/nuxt'
	],
	typescript: {
		strict: true
	},
	css: [
		'element-plus/dist/index.css',
		'~/style.css',
		'ant-design-vue/dist/reset.css'
	],
	elementPlus: { /** Options */},
})