<template>
	<div class="Z-menu">
		<div>
			主站
		</div>
		<div>
			博客
		</div>
		<div>
			音乐
		</div>
		<div>
			清单
		</div>
		<div>
			统计
		</div>
	</div>
	<div class="Z-menu-user">
		<img src="../public/photo/五月织姬.jpg" alt="" height="100px" width="100px">
	</div>
</template>

<script setup lang="ts">

let menu_width_number = 200
let menu_width = menu_width_number+'px';



</script>

<style scoped>

.Z-menu{
	position: relative;
	float: left;
	width: v-bind(menu_width);
	height: 100%;
	background-color: red;
}
.Z-menu div{
	height: 70px;
	width: 100%;
	font-size: 30px;
	color: var(--html-text-color);
	user-select: none;
	font-weight: bolder;
	text-align: center;
	line-height: 70px;
	transition: background-color .5s,  color .5s;
}
.Z-menu div:hover{
	color: red;
	background-color: #00DC82;
}
.Z-menu-user{
	position: absolute;
	bottom: 0;
	background-color: yellow;
	height: 100px;
	width: 200px;
}
.Z-menu-user img{
	margin-left: 50px;
	border-radius: 50%;
}

</style>