<template>
  <div class="cart-list">
	  <scroll class="content" ref="scroll">
		<!-- <ul>
			<li v-for="item in cartList">{{item}}</li>
		</ul> -->
		<cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
	  </scroll>
  </div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll.vue'
	import {mapGetters} from 'vuex'
	import CartListItem from './CartListItem.vue'
	
	export default {
		name:'CartList',
		computed:{
			...mapGetters(['cartList'])
		},
		methods:{		
		},
		data() {
			return {
				
			}
		},
		components:{
			Scroll,
			CartListItem
		},
		activated(){
			//console.log('在cartlist里调用refresh刷新')
			this.$refs.scroll.refresh()
		}
	}
</script>


<style scoped>
	.cart-list{
		height:calc(100vh - 133px);
	}
	
	.content{
		/*height: calc(100%- 93px -48px);*/
		background-color: #fff;
		height:100%;
		overflow: hidden;
	}
</style>
