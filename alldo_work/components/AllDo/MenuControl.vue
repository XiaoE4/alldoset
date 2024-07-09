<template>
	<div @click="menuOpenMethods">
		<div v-if="!menuOpen_store">
			<Expand style="width: 30px; height: 30px; color: var(--html-text-color)" />
		</div>
		<div v-else>
			<Fold style="width: 30px; height: 30px;color: var(--html-text-color)" />
		</div>
	</div>
</template>

<script setup lang="ts">
import {Expand, Fold} from "@element-plus/icons-vue";
import {useAppStore} from "~/store/counter"
let store = useAppStore()

// 装载菜单打开状态
let menuOpen_store = ref<boolean>()
// 从pinia中获取menuOpen
let menuOpen_reload = ()=>{
	menuOpen_store.value = store.menuOpen;
	console.log("reload():",menuOpen_store);
}
// 初加载
menuOpen_reload()
console.log("menuControl=>menuOpen",menuOpen_store.value)

// 点击改变打开状态后的事件
let menuOpenMethods = ()=>{
	let menuOpen= !menuOpen_store.value
	console.log("点击后的menuOpen为：",menuOpen)
	// 更改状态
	store.$patch({menuOpen:menuOpen})
	// 重新获取
	menuOpen_reload()
	console.log("点击后的menuOpen_store为：",menuOpen_store.value)
}





</script>

<style scoped>

</style>