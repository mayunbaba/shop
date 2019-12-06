import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'



Vue.config.productionTip = false
Vue.prototype.axios = axios

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'



// 按需引入vant 推荐
import {
  Tabbar,TabbarItem,Icon,NavBar,Swipe,SwipeItem,Lazyload
} from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
