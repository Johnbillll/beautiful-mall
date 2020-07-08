<template>
  <div class="recommends">
	<div v-for="item in recommends" class="recommendsItem">
		<a :href="item.link">
		<img :src="item.image" alt="">	
		<div>{{item.title}}</div>
		</a>
	</div>
  </div>
</template>

<script>
	export default {
		name:'recommend',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
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
	.recommends{
		display: flex;
		width:100;
		text-align: center;
		font-size:12px;
		padding:10px 0 20px;
		border-bottom: 8px solid #eee;
	}

	.recommendsItem{
		flex:1;
	}
	
	.recommendsItem img{
		width:70px;
		height:70px;
		margin-bottom: 3px;;
	}
</style>
