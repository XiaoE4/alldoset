<template>
    <div>
		<AppHeader />
        <p>我是默认布局1</p>
        <slot />
		<p>我是默认布局2</p>

		<AppFooter />

	</div>
</template>


<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>


<style>

</style>