<template>
  <div class="check-button" :class="{check:JgCheck}">
	<img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
	export default {
		name:'checkButton',
		props:{
			isChecked:{
				type:Boolean,
				default:false
			},
			count:{
				type:Number,
				default:1
			}
		},
		methods:{
						
		},
		data() {
			return {
				
			}
		},
		computed:{
			JgCheck(){
				if(this.count===0 || this.isChecked == false){
					
					return false;					
				}				
				return true;
			}
		},
		
	}
</script>


<style scoped>
	.check-button{	
		border-radius: 50%;
		border:2px solid #aaa;
	}
	.check{
		border-color:red;
		background-color: red;
	}
</style>
