<template>
  <div class="nav-bar">
	  <div class="left"><slot name="left"></slot></div>
	  <div class="center"><slot name="center"></slot></div>
	  <div class="right"><slot name="right"></slot></div>	
  </div>
</template>

<script>
	export default {
		name:'nav-bar',
		methods:{
			
			
		},
		data() {
			return {
				
			}
		}
	}
</script>


<style scoped>
	.nav-bar {
		display:flex;
		line-height: 44px;
		height:44px;
		box-shadow: 0 1px 1px rgba(100,100,100,0.1);
	}

	.left, .right {
		height:44px;
		width:60px;		
	}

	.center{
		flex:1;		
		text-align: center;
	}
</style>
