<template>
	<swiper class="oneswiper">
		<swiper-item v-for="item in topImages" >
			<img :src="item" alt="" @load="imgLoad">
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	//import {Swiper,SwiperItem} from 'components/common/swiper'
	
	export default {
		name:'DetailSwiper',
		methods:{
			imgLoad(){
			//	console.log('imgLoadover')
			}
			
		},
		props:{
			topImages:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>


<style scoped>
	.oneswiper{
		height:300px;
		overflow: hidden;
	}

</style>
