<template>
	<div>
		<div class="Z-header-control">
			<MenuControl />
		</div>
		我是顶部导航栏
		<Theme />
	</div>
</template>

<script setup lang="ts">
import MenuControl from "~/components/AllDo/MenuControl.vue";


</script>

<style scoped>
.Z-header-control{
	width: 200px;
	height: 50px;
	float: left;
}
div{
	color: var(--html-text-color);
}
/*.topBar{
	background-color: var(--html-bg-color);
	height: 35px;
	width: 100%;
	margin-bottom: 10px;
}*/
</style>