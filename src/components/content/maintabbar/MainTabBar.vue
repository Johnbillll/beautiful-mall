<template>
	<div>
		<tab-bar class="tab-bar">
			<!-- activeColor的颜色要么写上想要的颜色， 要么直接不写activeColor，不要写出来又不传颜色 -->
			<tab-bar-item path="home" activeColor="red">
				<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path="category" >
				<img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="cart" > 
				<img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="profile" >
				<img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
	

</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from '../../common/tabbar/TabBarItem.vue'
	export default {
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
	
	
</script>

<style>
	.tab-bar{
		z-index:100;
	}
	
</style>
