<template>
  <div class="tab-bar-item" @click="itemClick()">	
	<div v-if="!isActive"><slot name="item-icon"></slot></div>
	<div v-else><slot  name="item-icon-active"></slot></div>
	<div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		methods:{
			itemClick(){
				//console.log("click");
				this.$router.replace(this.path).catch(err=>err)  //修改路由
			},
			
		},
		computed:{
			isActive(){
				//判断路径里面是否含有this.path，如果有则！==-1，返回true，则显示红色
				return this.$route.path.indexOf(this.path)!==-1
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
			
		},
		data() {
			return {
				// isActive:true
			}
		}
	}
</script>


<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height:49px;
		font-size: 14px;
	}
	
	.tab-bar-item img{
		width:24px;
		height:24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-top: 2px;
	}
	
	
</style>
