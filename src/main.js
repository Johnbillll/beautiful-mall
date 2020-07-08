import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
import VueLazyLoad from 'vue-lazyload'


import toast from 'components/common/toast'
Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(toast)
/* eslint-disable no-new */

//使用懒加载的插件
Vue.use(VueLazyLoad,{
	loading:require('./assets/img/common/Johnbill.jpg')
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),  
  components:{
	  // router:router
  }
  
})




