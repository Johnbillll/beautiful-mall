<template>
  
 <swiper>
 	  <swiper-item v-for="item in banners">
 		 <a :href="item.link">
 			 <img :src="item.image" alt="" @load="imageLoad">
 		 </a> 
 	  </swiper-item>
 </swiper>
  
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	
	export default {
		name:'homeswiper',
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
			
		},
		methods:{
			imageLoad(){
				
				if(!this.isLoad){
					//console.log('img加载完成');
					this.$emit('swiperImageLoad');
					this.isLoad = true
				}
				
			}
			
		},
		data() {
			return {
				isLoad:false
			}
		}
	}
</script>


<style scoped>

</style>
