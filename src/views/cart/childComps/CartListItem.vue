<template>
  <div id="shop-item">
	<div class="item-selector">
		<CheckButton :is-checked ="itemInfo.checked" 
					 @click.native="checkClick" 					 
					 :count="itemInfo.count"></CheckButton >
		<!-- @checkBtnclick="checkedChange" :value="itemInfo.checked" -->
	</div>
	
	<div class="item-img">
		<img :src="itemInfo.image" alt="商品图片">
	</div>
	<div class="item-info">
		<div class="item-title">{{itemInfo.title}}</div>
		<div class="item-desc">{{itemInfo.desc}}</div>
		<div class="info-bottom">
			<div class="item-price left">￥{{itemInfo.price}}</div>
			<div class="allcount">
			<button class="btn" @click="subClick">-</button>
			<div class="item-count ">{{itemInfo.count}}</div>
			<button class="btn" @click="addClick">+</button>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
	import CheckButton from 'components/content/checkButton/checkButton.vue'
	
	export default {
		name:'CartListItem',
		methods:{
			checkClick(){
				this.itemInfo.checked=!this.itemInfo.checked
				//console.log('click check')
				//console.log(this.itemInfo)
			},
			subClick(){
				if(this.itemInfo.count>0)
				this.itemInfo.count--
			},
			addClick(){
				console.log('add')
				this.itemInfo.count++
			}
			
		},
		components:{
			 CheckButton
		},
		props:{
			itemInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			}
		},
		activated(){
			
		}
	}
</script>


<style scoped>
	
	#shop-item{
		width:100%;
		display: flex;
		font-size:0;
		padding:5px;
		border-bottom: 1px solid #ccc;
	}
	.item-selector{
		width:20px;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.item-img{
		padding:5px;
	}
	.item-img img{
		width: 80px;
		height:100px;
		display: block;
		border-radius: 5px;
	}	
	.item-info{
		font-size:17px;
		color: #333;
		padding:5px 10px;
		position:relative;
		overflow: hidden;
	}
	.item-title,.item-desc {
	
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}	
	.item-info .item-desc {
		font-size:14px;
		color:#666;
		margin-top: 15px;
	}
	
	.info-bottom{
		margin-top: 10px;
		position: absolute;
		bottom: 10px;
		left:10px;
		right:10px;
		display: flex;
		height:30px;
	}
	.info-bottom .item-price{
		color:orangered;
	}
	.allcount{
		right:0;
		position:absolute;
		
		display: flex;
	}
	
	.item-count{
		
			width:50px;
		    line-height: 18px;
		    text-align: center;
		    padding: 1px;
		    margin: 0;
		    font-size: 12px;
		    font-family: verdana;
		    color: #333;
			border:1px solid #cacbcb;
	}
	.btn{
		position:relative;
		width:20px;
		color:#666;
		border:1px solid #cacbcb;
		background-color:#fff;
	}
	

</style>
