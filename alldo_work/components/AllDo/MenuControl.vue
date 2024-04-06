<template>
	<div v-if="menuOpen">
		<Expand style="width: 30px; height: 30px; margin-left: 10px;margin-top: 10px;color: var(--html-text-color)" />
	</div>
	<div v-else>
		<Fold style="width: 30px; height: 30px; margin-left: 10px;margin-top: 10px;color: var(--html-text-color)" />
	</div>
</template>

<script setup lang="ts">
import {Expand, Fold} from "@element-plus/icons-vue";

let menuOpen = true



</script>

<style scoped>

</style>