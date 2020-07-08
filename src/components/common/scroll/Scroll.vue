<template>
	<!-- ref/children  ref绑定到 -->
  <div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
  </div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		name:'scroll',
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			scrollTo(x,y,time=300){
				this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			},
			refresh(){
				//console.log('这是refresh里的刷新')
				this.scroll.refresh()
			},
			getScrollY(){
			return 	this.scroll ? this.scroll.y : 0
			}
		},
		data() {
			return {
				scroll:null
			}
		},
		mounted(){
			// console.log('position')
			//创建BScroll对象
			this.scroll = new BScroll(this.$refs.wrapper,{
				click:true,
				probeType:this.probeType, //用于实时监听屏幕滚动事件
				pullUpLoad:this.pullUpLoad  //上拉
			})
			
			//监听滚动的位置
			this.scroll.on('scroll',(position)=>{
				// console.log(position)
				this.$emit('contentscroll',position)
			})
			
			//上拉加载更多
			if(this.pullUpLoad){
				this.scroll.on('pullingUp',()=>{
					// console.log('上拉加载更多');
					this.$emit('pullingUp')
				})
			}
			
			
			
		}
	}
</script>


<style scoped>


</style>
