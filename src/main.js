import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import {Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
import router from '../router'
import store from './store'
import http from 'axios'
import '../api/mock'


Vue.config.productionTip = false
// Vue.use(Button)
// Vue.use(Radio)
// Vue.use(Container)
// Vue.use(Main)
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
Vue.use(ElementUI)

Vue.prototype.$http=http



new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
