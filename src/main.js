import Vue from 'vue'
import App from './App.vue'
import elementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(elementUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
