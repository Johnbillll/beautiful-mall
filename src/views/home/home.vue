<template>
  <div id="home" class="wrapper" >
	  <navbar class="home-nav"><div slot="center">购物街</div></navbar>
	  <tab-control :titles="['流行','新款','精选']"
	  				   class="tab-control" 
	  				   @tabClick="tabClick"
	  				   ref="tabControl1"
					   v-show="isTabFixed"
	  				   ></tab-control>	
	<scroll class="content" 
			ref="scroll"  
			:probe-type="3" 
			@contentscroll="contentScroll"
			:pull-up-load="true" 
			@pullingUp="loadMore">
	  <home-swiper :banners="banners" ref="swiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
	  <recommend-view :recommends="recommends"></recommend-view>
	  <feature-view></feature-view>
	  <tab-control :titles="['流行','新款','精选']" 				  
				   @tabClick="tabClick"
				   ref="tabControl2"
				   ></tab-control>	  
	  <goods-list :goods="showGoods" ></goods-list>
	</scroll>
	
	<back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
  
</template>

<script>	
	import HomeSwiper from './childcomps/HomeSwiper.vue'
	import RecommendView from './childcomps/RecommendView.vue'
	import FeatureView from './childcomps/FeatureView.vue'
	
	import navbar from 'components/common/navbar/navbar.vue'
	import tabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import Scroll from'components/common/scroll/Scroll.vue'
	import BackTop from'components/content/backtop/BackTop.vue'
		
	import {getHomeMultidata,getHomeGoods} from "network/home.js"
	import {debounce} from 'common/utils.js'
	import {itemListenerMixin} from 'common/mixin.js'
	
	export default {
		name:'home',
		methods:{
			/*网络请求相关*/
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;					
				});
			},
			
			getHomeGoods(type){
				const page = this.goods[type].page +1;
				getHomeGoods(type,page).then(res=>{
					// console.log(res);
					this.goods[type].list.push(...res.data.list )
					this.goods[type].page+=1;
					
					//完成上拉加载更多
					this.$refs.scroll.finishPullUp()
				});
			},
			
			/*事件监听的方法*/
			tabClick(index){
				
				switch(index){
					case 0:
					this.currentType = 'pop';					
					break;
					case 1:
					this.currentType = 'new';
					break;
					case 2:
					this.currentType = 'sell'
					break;
				}
				//console.log(this.$refs.tabControl1.currentIndex)
				 this.$refs.tabControl1.currentIndex = index;
				 this.$refs.tabControl2.currentIndex = index;
			},
			backClick(){
				// console.log('click');
				this.$refs.scroll.scrollTo(0,0);
			},
			contentScroll(position){
				//1.判断BackTop是否显示
				//position.y <-1000?this.isShow=true:this.isShow=false;
				this.isShow =position.y<-1000;
				
				
				//2.决定tabControl是否吸顶(position)
				 this.isTabFixed = (-position.y)>this.tabOffsetTop;
				// console.log(this.isTabFixed)
				// console.log(-position.y)
				// console.log(this.tabOffsetTop)
			},
			loadMore(){
				this.getHomeGoods(this.currentType)
				
				// this.$refs.scroll.scroll.refresh()
			},
			
			swiperImageLoad(){
			//	console.log('真实的高度'+this.$refs.tabControl.$el.offsetTop);
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
			}
		},
		
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		mixins:[itemListenerMixin],
		data() {
			return {
			banners:[],
			recommends:[],
			goods:{
				'pop':{page:0,list:[]},
				'new':{page:0,list:[]},
				'sell':{page:0,list:[]},
			},
			currentType:'pop',
			isShow:false,
			tabOffestTop:0,
			isTabFixed:false,
			tcIsShow:false,
			saveY:0,
			
			}
		},
		components:{								
			HomeSwiper,
			RecommendView,
			FeatureView,
			
			navbar,
			tabControl,
			GoodsList,
			Scroll,
			BackTop
			
		},
		created(){
			//1.请求多个数据
			this.getHomeMultidata();
			//2.请求商品数据
			this.getHomeGoods('pop');
			this.getHomeGoods('new');
			this.getHomeGoods('sell');
			
			
		},
		mounted(){
			},
		destroyed(){
			console.log('destroyed')
		},
		
		activated(){
			this.$refs.scroll.refresh()
			this.$refs.scroll.scrollTo(0,this.saveY,0)
			
		},
		deactivated() {
		//1.保存Y值
		this.saveY = this.$refs.scroll.getScrollY()
		
		//取消全局事件的监听
		this.$bus.$off('itemImageLoad',this.itemImgListener)
		}
	}
</script>


<style scoped>
	#home{
		/* padding-top: 44px; */
		height:100vh;		
		position: relative;
	}
	
	.home-nav {
		background-color: var(--color-tint);
		color:#fff;		
		/* position:fixed;
		left:0;
		right:0;
		top:0;
		z-index:9; */
	}
	
	.tab-control{
		position:relative;
		z-index:9;
		
	}
	
	.content{
		/* height:300px; */	
		overflow: hidden;
		
		position: absolute;
		top:44px;
		bottom:49px;
		left: 0;
		right:0;
	}
	
	
</style>
