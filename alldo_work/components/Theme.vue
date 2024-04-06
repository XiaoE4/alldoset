<template>
	<el-switch
		:model-value="!isDark"
		size="large"
		inline-prompt
		style="--el-switch-on-color: #F2F2F2; --el-switch-off-color: #2C2C2C;--el-color-white: var(--html-text-color);"
		active-text="明亮"
		inactive-text="暗夜"
		:active-action-icon="Sunny"
		:inactive-action-icon="Moon"
		@click="toggleDark();themeStore()"
	/>
</template>

<script setup lang="ts">
import {useDark, useToggle} from '@vueuse/core';
import {Moon, Sunny} from "@element-plus/icons-vue";

const refTheme:any = ref('unknown')

const isDark = useDark()
const toggleDark = useToggle(isDark)

let themeStore =()=>{
	if(localStorage.getItem('vueuse-color-scheme')=='dark'){
		console.log()
		refTheme.value='dark'
	}else{
		refTheme.value='light'
	}
}
</script>

<style scoped>


</style>