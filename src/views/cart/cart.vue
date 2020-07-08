<template>
  <div class="cart">
	<nav-bar class="nav-bar"><div slot="center" >购物车({{length}})</div></nav-bar>
	<cart-list></cart-list>
	<cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/navbar.vue'
	//import navbar from 'components/common/navbar/navbar.vue'
	import {mapGetters} from 'vuex'
	import CartList from './childComps/CartList.vue'
	import CartBottomBar from './childComps/CartBottomBar.vue'
	
	export default {
		name:'cart',
		methods:{
			
			
		},
		computed:{
			// CartLength(){
			// 	return this.$store.getters.cartLength
			// }
			//	...mapGetters(['cartLength','cartList'])
			...mapGetters({
				length:'cartLength',
				list:'cartList'
			})
		},
		components:{
			//navbar
			NavBar,
			CartList,
			CartBottomBar
		},
		data() {
			return {
				
			}
		}
	}
</script>


<style scoped>
	.nav-bar{
		background-color: var(--color-tint);
		color:#fff;	
	}
	
	.cart{
		height:100vh;
	}
</style>
