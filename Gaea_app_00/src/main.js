import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueResource from 'vue-resource'
import Header from './components/conponAll/Header.vue'
import Footer from './components/conponAll/Footer.vue'


Vue.component("my-footer",Footer)
Vue.component("my-header",Header)

//引入element  ui包
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册element  ui
Vue.use(ElementUI);


//3.1:引入axios库(VueResource)
import axios from "axios"
//3.2:跨域保存session值
axios.defaults.withCredentials=true
//3.3:注册组件
Vue.prototype.axios=axios


Vue.use(vueResource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;  //6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
