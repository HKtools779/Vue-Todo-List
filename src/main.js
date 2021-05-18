import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({  //配置对象的属性名是固定的
  el:'#app',
  components:{App},
  template:'<App/>',
  router
})
