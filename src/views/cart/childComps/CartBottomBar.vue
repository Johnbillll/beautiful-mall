<template>
  <div class="bottom-bar">
	  <div class="check-content" @click="allChecked">
		<check-button class="check-button" 
					  :is-checked="isSelectAll"
					   ></check-button>
		<span>全选</span>
	  </div>
	  
	  <div class="totalPrice">
		 合计：{{totalPrice}}
	  </div>
	  
	  <div class="calculate" @click="calcClick">
		  去计算:({{checkLength}})
	  </div>
  </div>
</template>

<script>
	import CheckButton from 'components/content/checkButton/checkButton.vue'
	import {mapGetters} from 'vuex'
	
	export default {
		name:'CartBottomBar',
		methods:{
		
			allChecked(){
				// for(let item of this.$store.state.cartLsit){
				// 	console.log(item)
				// }
				if(this.isSelectAll){
					this.cartList.forEach(item => item.checked = false)
				}
				else {
					this.cartList.forEach(item => item.checked = true)
				}
				//console.log(this.isSelectAll)
				// if(this.isSelectAll){
				// 	for(let item of this.cartList){						
				// 			item.checked = false					
				// 		}
				// }											
				// else 
				//  for(let item of this.cartList){
				// 	if(item.checked == false){
				// 		item.checked = true
				// 	}
				// 	}				
					
			},
			calcClick(){
				if(!this.cartList.length)
				this.$toast.show('请选择购买的商品',2000)
			}
			
		},
		data() {
			return {
			
			}
		},
		components:{
			CheckButton
		},
		computed:{
			...mapGetters(['cartList']),
			totalPrice(){
				return '￥' +  this.cartList.filter(item =>{
					return item.checked
				}).reduce((preValue,item)=>{
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
			checkLength(){
				return this.cartList.filter(item =>{
					return item.checked
				}).reduce((preValue,item)=>{
					return item.count+preValue
				},0)
			},
			isSelectAll(){
			//	return !(this.cartList.filter(item => !item.checked).length)
			if(this.cartList.length ===0)
			return false;
			// else return !this.cartList.find(item => !item.checked)
			
			for(let item of this.cartList){
				if(item.checked==false) {
				return false	
				}				
				}
			return true;
			}
		}
	}
</script>


<style scoped>
	.bottom-bar{
		
		display: flex;				
		position:relative;
		height:40px;
		line-height: 40px;
		/*bottom:49px;*/
		background-color: #eee;
	}
	
	.check-content{
		display: flex;
		margin-left: 10px;
		align-items:center;
		width:60px;
	}
	.check-button{
		width:20px;
		height:20px;
		line-height: 20px;
		margin-right:2px;
		
	}
	
	.totalPrice{
		margin-left:20px;
		flex:1;
	}
	
	.calculate{
		width:100px;
		background-color:red;
		text-align: center;
		font-size:16px;
		color:#fff;
	}
	.is-checked{
		border-color:red;
		background-color: red;
	}
</style>
