<template>
  <div class="warpper" ref="aaaa">
	  <scroll   class="content" 
			ref="scroll"  
			:probe-type="3" 
			@contentscroll="contentScroll" 
			>
	<ul>
		<li>列表1</li>
		<li>列表2</li>
		<li>列表3</li>
		<li>列表4</li>
		<li>列表5</li>
		<li>列表6</li>
		<li>列表7</li>
		<li>列表8</li>
		<li>列表9</li>
		<li>列表10</li>
		<li>列表11</li>
		<li>列表12</li>
		<li>列表13</li>
		<li>列表14</li>
		<li>列表15</li>
		<li>列表16</li>
		<li>列表17</li>
		<li>列表18</li>
		<li>列表19</li>
		<li>列表20</li>
	</ul>
	<ul>
		<li>列表1</li>
		<li>列表2</li>
		<li>列表3</li>
		<li>列表4</li>
		<li>列表5</li>
		<li>列表6</li>
		<li>列表7</li>
		<li>列表8</li>
		<li>列表9</li>
		<li>列表10</li>
		<li>列表11</li>
		<li>列表12</li>
		<li>列表13</li>
		<li>列表14</li>
		<li>列表15</li>
		<li>列表16</li>
		<li>列表17</li>
		<li>列表18</li>
		<li>列表19</li>
		<li>列表20</li>
	</ul>
	<ul>
		<li>列表1</li>
		<li>列表2</li>
		<li>列表3</li>
		<li>列表4</li>
		<li>列表5</li>
		<li>列表6</li>
		<li>列表7</li>
		<li>列表8</li>
		<li>列表9</li>
		<li>列表10</li>
		<li>列表11</li>
		<li>列表12</li>
		<li>列表13</li>
		<li>列表14</li>
		<li>列表15</li>
		<li>列表16</li>
		<li>列表17</li>
		<li>列表18</li>
		<li>列表19</li>
		<li>列表20</li>
	</ul>
	<ul>
		<li>列表1</li>
		<li>列表2</li>
		<li>列表3</li>
		<li>列表4</li>
		<li>列表5</li>
		<li>列表6</li>
		<li>列表7</li>
		<li>列表8</li>
		<li>列表9</li>
		<li>列表10</li>
		<li>列表11</li>
		<li>列表12</li>
		<li>列表13</li>
		<li>列表14</li>
		<li>列表15</li>
		<li>列表16</li>
		<li>列表17</li>
		<li>列表18</li>
		<li>列表19</li>
		<li>列表20</li>
	</ul>
	<ul>
		<li>列表1</li>
		<li>列表2</li>
		<li>列表3</li>
		<li>列表4</li>
		<li>列表5</li>
		<li>列表6</li>
		<li>列表7</li>
		<li>列表8</li>
		<li>列表9</li>
		<li>列表10</li>
		<li>列表11</li>
		<li>列表12</li>
		<li>列表13</li>
		<li>列表14</li>
		<li>列表15</li>
		<li>列表16</li>
		<li>列表17</li>
		<li>列表18</li>
		<li>列表19</li>
		<li>列表20</li>
	</ul>
	<ul>
		<li>列表1</li>
		<li>列表2</li>
		<li>列表3</li>
		<li>列表4</li>
		<li>列表5</li>
		<li>列表6</li>
		<li>列表7</li>
		<li>列表8</li>
		<li>列表9</li>
		<li>列表10</li>
		<li>列表11</li>
		<li>列表12</li>
		<li>列表13</li>
		<li>列表14</li>
		<li>列表15</li>
		<li>列表16</li>
		<li>列表17</li>
		<li>列表18</li>
		<li>列表19</li>
		<li>列表20</li>
	</ul>
	</scroll>
	<back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll.vue'
	import {backTopMixin}  from 'common/mixin.js'
	
	export default {
		name:'category',
		methods:{
			contentScroll(position){
				//1.判断BackTop是否显示
				//position.y <-1000?this.isShow=true:this.isShow=false;
				this.isShow =position.y<-1000;		
				this.listenShowBackTop(position)
			},
			
			
		},
		components:{
			Scroll
		},
		mixins:[backTopMixin],
		data() {
			return {
				scroll:null
			}
		},
		mounted(){
			
		}
	}
</script>


<style scoped>
	.warpper{
		position:relative;
		/*z-index:101;*/
		background-color: #fff;
		height:100vh;
	}
	
	.content{
		/*height:calc(100% - 44px);*/
		background-color: #ff6700;
		height:calc(100% - 102px);
		/*568-44-58*/
	}
	
</style>
