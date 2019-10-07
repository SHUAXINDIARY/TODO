import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// iconfont css
import './assets/icon/iconfont.css'
// animatecss
import './assets/css/animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
