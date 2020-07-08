import {debounce} from 'common/utils.js'
import BackTop from'components/content/backtop/BackTop.vue'

export const itemListenerMixin = {
	data(){
		return{
			itemImgListener:null
		}
	},
	
	mounted(){
		const refresh = debounce(this.$refs.scroll.refresh,50)
		
		this.itemImgListener = ()=>{
			refresh()
			}
		this.$bus.$on('itemImageLoad',this.itemImgListener)
	
		
	}
}


export const backTopMixin = {
	components:{
		BackTop
	},
	
	data(){
		return{
		isShow:false	
		}		
	},
	methods:{
		backClick(){			
			this.$refs.scroll.scrollTo(0,0,300);
		},
		listenShowBackTop(position){
			this.isShow =position.y<-1000;

		}
	}
}