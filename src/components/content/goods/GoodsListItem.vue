<template>
  <div class="goods-item" @click="itemClick">
	<img v-lazy="showImage" alt="" @load="imageLoad">
	<div class="goods-info">
		<p>{{goodsItem.title}}</p>
		<span class="price">{{goodsItem.price}}</span>
		<span class="collect">{{goodsItem.cfav}}</span>
	</div>
  </div>
</template>

<script>
	export default {
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit('itemImageLoad')
			},
			itemClick(){
				
				//console.log(this.$route.path.indexOf('/detail'))
				// if(this.$route.path.indexOf('/detail')!==-1){
				// 	console.log('在详情页中的点击')
				// 	this.$router.push('/detail/'+this.goodsItem.shop_id)
				// }
					
				 this.$router.push('/detail/'+this.goodsItem.iid)
				//console.log(this.goodsItem)
				
				
				// this.$router.push({
				// 	path:'/datail',
				// 	query:{
				// 		iid:this.goodsItem.iid
				// 	}
				// })
			}
			
		},
		computed:{
			showImage(){
			return this.goodsItem.image || this.goodsItem.show.img	
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>


<style scoped>
 .goods-item {
    padding-bottom: 40px;
	position:relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    /* border:3px solid var(--color-tint); */
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px; 
  }
</style>
