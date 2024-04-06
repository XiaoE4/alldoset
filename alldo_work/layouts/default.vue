<template>
    <div>
		<div class="Z-header">
			<AppHeader />
		</div>
		<div class="Z-index">
			<Menu />
			<slot />
		</div>
<!--		<p>我是默认布局2</p>-->
<!--		<p>也是NuxtLayout</p>-->
		<div class="Z-footer">
			<AppFooter />
		</div>
	</div>
</template>


<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import {useStore} from "~/store/counter"









// pinia中的state用法及监测
let test1 = ()=>{
	let store_test = useStore()
	console.log(store_test.userList)
	console.log(store_test.user)

	store_test.$patch({table:{a:"1",b:"2",c:114514}})

	console.log(store_test.table.c)

// 监测store_test的改变
	watch(
		store_test,
		(state) => {
			// 每当状态发生变化时，将整个 state 持久化到本地存储。
			console.log("watch到改变：",state.table)
		},
		{ deep: true }
	)
}
test1()

</script>


<style>

.Z-header{
	height: 50px;
	width: 100%;
	background-color: #FFA500;
}
.Z-index{
	position: relative;
	height: calc(100vh - 150px);
	/*height: 40px;*/
	width: 100%;
	min-height: 450px;
	background-color: #FFE211;
	color: var(--html-text-color);
}
.Z-index:nth-child(1){
	float: left;
}
.Z-index:nth-child(2){
	float: right;
}
.Z-footer{
	height: 100px;
	width: 100%;
	background-color: #FFC0CB;
	display: block;
	position: absolute;
	bottom: 0;
}

</style>