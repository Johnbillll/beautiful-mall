<template>
  <div id="detail">
	<detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>	
	<scroll class="content" ref="scroll" :probe-type="3" @contentscroll="contentScroll">		
	<detail-swiper :top-images="topImages"></detail-swiper>
	<!-- <ul style="width:300px">
		<li v-for="item in $store.state.cartList">{{item}}</li>
	</ul> -->
	<detail-base-info :goods="goods"></detail-base-info>
	<detail-shop-info :shop="shop"></detail-shop-info>
	<detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
	<detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
	<detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
	<goods-list :goods="recommends" ref="recommend"></goods-list>
	</scroll>	
	<detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
	<back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import DetailShopInfo from './childComps/DetailShopInfo.vue'
	import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
	import DetailParamInfo from './childComps/DetailParamInfo.vue'
	import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
	import DetailBottomBar from './childComps/DetailBottomBar.vue'
	
	import Scroll from 'components/common/scroll/Scroll.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	
	
	import {debounce} from 'common/utils.js'
	import {itemListenerMixin,backTopMixin} from 'common/mixin.js'
	import {getDetail,Goods,Shop,GoodsParam,getRecommend}  from 'network/detail.js'
	
	import {mapActions} from 'vuex'
	export default {
		name:'detail',
		methods:{	
			...mapActions(['addCart']),
			imageLoad(){
				this.$refs.scroll.scroll.refresh()
				console.log('success refresh ')
				
				this.themeTopYs = [];
				this.themeTopYs.push(0);
				this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
				this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-55);
				console.log(this.themeTopYs)
			},
			
			titleClick(index){
				//console.log(index)
				this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
				
			},
			contentScroll(position){
				//console.log(position)
				//获取y值
				const positionY = -position.y	
				//console.log(positionY)
				//和主题值进行对比
				// let length = this.themeTopYs.length
				// for(let i =  0; i< length; i++){
				// 	if(this.currentIndex !== i &&((i<length -1 && positionY >= this.themeTopYs[i] 
				// 	&&positionY<this.themeTopYs[i+1]) || (i === length -1 && positionY >= this.themeTopYs[i]))){
				// 		this.currentIndex = i;
				// 		console.log(this.currentIndex);
				// 		this.$refs.nav.currentIndex = this.currentIndex
				// 	}
				// }
				
				
				if(positionY<this.themeTopYs[1]){
					
					this.currentIndex=0				
				}
				else if(positionY<this.themeTopYs[2]){
					
					this.currentIndex=1			
				}
				else if(positionY<this.themeTopYs[3]){
					this.currentIndex=2
				}
				else if(positionY>this.themeTopYs[3]){
					this.currentIndex=3
				}
					
				this.$refs.nav.currentIndex = this.currentIndex
				
				this.listenShowBackTop(position)
			},
			addToCart(){
			//	console.log('add')
			//1.获取购物车需要展示的信息
			const product = {}
			product.image = this.topImages[0];
			product.title = this.goods.title;
			product.desc = this.goods.desc;
			product.price = this.goods.realPrice;
			product.iid  = this.iid;	
					
			//2.将商品添加到购物车里		
			//this.$store.commit('addCart',product)
			// this.$store.cartList.push(product)
			
			// this.$store.dispatch('addCart',product).then(res =>{
			// 	console.log(res)
			// })	
					
			this.addCart(product).then(res => {
				this.$toast.show(res,1000)
				console.log(this.$toast);
			})
					
			}
			
			
		},
		mixins:[itemListenerMixin,backTopMixin],
		data() {
			return {
				iid:null,
				topImages:[],
				goods:{},
				shop:{},
				detailInfo:{},
				paramInfo:{},
				commentInfo:{},
				recommends:[],				
				themeTopYs:[],
				currentIndex:0
			}
		},
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			Scroll,
			GoodsList,
			DetailBottomBar,
			backTopMixin
		},
		created(){
			//1.保存iid
			this.iid = this.$route.params.iid
			
			//2.根据iid请求详情数据
			getDetail(this.iid).then(res=>{
				
			//获取顶部的图片和轮播数据
			//console.log(res)
			let data = res.result
			this.topImages = res.result.itemInfo.topImages
			
			//获取商品信息
			this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
			
					
			//创建店铺信息
			this.shop = new Shop(data.shopInfo)
			
			//保存商品的详情数据
			this.detailInfo = data.detailInfo
			
			
			//获取参数的信息
			this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
			
			//取出评论的信息
			if(data.rate.CRate !==0)
			this.commentInfo = data.rate.list[0]
									
			// this.$nextTick(()=>{
				
			//   })
			})
			
			//3.请求推荐数据
			getRecommend().then(res=>{
				// console.log(res);
				this.recommends = res.data.list
			})
					

		},
		mounted(){

		},
		updated(){
			
		},
		activated(){
			
		},
		destroyed(){
			//取消全局事件的监听
			this.$bus.$off('itemImageLoad',this.itemImgListener)
		}
	}
</script>


<style scoped>

	#detail{
		position:relative;
		z-index:101;
		background-color: #fff;
		height:100vh;
	}
	.detail-nav{
		position:relative;
		z-index:102;
		background-color: #fff;
	}
	
	.content{
		/*height:calc(100% - 44px);*/
		height:calc(100% - 102px);
		/*568-44-58*/
	}
</style>
