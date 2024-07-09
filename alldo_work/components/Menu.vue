<template>
	<div class="Z-menu" :style="menuStyle">
		<div>
			<HomeFilled style="width: 40px;height: 40px;margin: 15px 0 15px 5px"/>
			<span v-show="menuOpen_state">主站</span>
		</div>
		<div>
			<Message style="width: 40px;height: 40px;margin: 15px 0 15px 5px"/>
			<span v-show="menuOpen_state">博客</span>
		</div>
		<div>
			<Headset style="width: 40px;height: 40px;margin: 15px 0 15px 5px"/>
			<span v-show="menuOpen_state">音乐</span>
		</div>
		<div>
			<List style="width: 40px;height: 40px;margin: 15px 0 15px 5px"/>
			<span v-show="menuOpen_state">清单</span>
		</div>
		<div>
			<TrendCharts style="width: 40px;height: 40px;margin: 15px 0 15px 5px"/>
			<span v-show="menuOpen_state">统计</span>
		</div>
	</div>
	<div class="Z-menu-user">
		<img alt="" height="100px" src="../public/photo/五月织姬.jpg" width="100px">
	</div>
</template>

<script lang="ts" setup>

import {HomeFilled,Headset, List, Message, TrendCharts} from "@element-plus/icons-vue";
import {useAppStore} from "~/store/counter"

let store = useAppStore()
let menuOpen_state = ref()
let menuStyle = ref({width:''})

// 初始化state值
menuOpen_state.value = store.menuOpen
console.log(menuOpen_state.value)

let changeWidth = () => {
	if (menuOpen_state.value) {
		menuStyle.value = {width:'200px'}
	} else {
		menuStyle.value = {width:'50px'}
	}
}
// 初始化
changeWidth()
// 监听store中的menuOpen改变以让菜单width改变
watch(
	store,
	(state) => {
		// 每当状态发生变化时，将整个 state 持久化到本地存储。
		if (state.menuOpen !== menuOpen_state.value) {
			console.log("Menu刚才watch到改变：", state.menuOpen)
			// 更新menuOpen值
			menuOpen_state.value = state.menuOpen
			console.log("watch后的值为", menuOpen_state.value)
			changeWidth()
		}
	},
	{deep: true}
)


</script>

<style scoped>

.Z-menu {
	position: relative;
	float: left;
	height: 100%;
	background-color: red;
	transition: width .5s;
}
.Z-menu div {
	height: 70px;
	width: 100%;
	font-size: 30px;
	border-radius: 15px;
	color: var(--html-text-color);
	transition: background-color .5s, color .5s;
}

.Z-menu div:hover {
	color: red;
	background-color: #00DC82;
	border-radius: 15px;
}
.Z-menu div span{
	float: right;
	margin-top: 15px;
	margin-right: 50px;
	height: 40px;
	width: 60px;
	font-weight: bolder;
	user-select: none;
	animation: spanShow .5s;
}
@keyframes spanShow {
	0%{
		opacity: 0;
		display: none;
	}
	50%{
		opacity: 0;
		display: none;
	}
	100%{
		opacity: 1;
	}
}

.Z-menu-user {
	position: absolute;
	bottom: 0;
	background-color: yellow;
	height: 100px;
	width: 200px;
}

.Z-menu-user img {
	margin-left: 50px;
	border-radius: 50%;
}

</style>