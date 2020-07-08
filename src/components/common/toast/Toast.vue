<template>
  <div class="toast" v-show="isShow">
		<div>{{message}}</div>
  </div>
</template>

<script>
	export default {
		name:'toast',
		props:{
			
		},
		methods:{
			show(message='默认文字',duration=2000){
				this.isShow = true;
				this.message = message
				
				setTimeout(()=>{
					this.isShow = false;
					this.message = ''
				},duration)
			}
			
		},
		data() {
			return {
				message:'',
				isShow:false
			}
		}
	}
</script>


<style scoped>

	.toast{
		position:fixed;
		padding:8px 10px;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		background-color: rgba(0,0,0,0.75);
		color:#fff;
		z-index:1000;
		
	}
</style>
