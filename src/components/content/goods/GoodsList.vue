<template>
  <div class="goods-list">
	  <goods-list-item v-for="item in goods" :goods-item="item" :key="item.image"></goods-list-item>
   
  </div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	
	export default {
		name:'goodslist',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
				
		},
		components:{
			GoodsListItem
		},
		methods:{
			
			
		},
		data() {
			return {
				
			}
		}
	}
</script>


<style scoped>

 .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }
</style>
