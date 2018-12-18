// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui';/* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

// ajax请求相关库
import axios from 'axios'
// 引入vuex  tore文件
import store from '@/vuex/store'


Vue.use(YDUI)
Vue.config.productionTip = false

// 配置ajax请求头  以表单方式提交  数据在formdata里面
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


//1.定义全局变量(prototype是原型链  每个组件相当于一个新的vue对象  他们的原型链是不同的 
//也就是都说在其他组件中无法修改此组件中的prototype原型链的值)
//实例中this.footer从Vue.prototype.footer 而来，所以仍然是true
Vue.prototype.$http = axios
Vue.prototype.footer = true

//2.把全局变量挂在Window下面  可以用于兄弟组件通讯
window.a = true;

/* eslint-disable no-new */
new Vue({
	data(){
		return{
			//3.在根实例data中直接返回全局变量 子组件使用$root.a获取
			//4.可以使用vuex操作全局变量
          a:1,//a是一个测试（用来控制footer是否显示）
          wd:'',//search api的请求关键字
		}
	},
  el: '#app',
  router,
  store,//在此处使用vuex
  components: { App },
  template: '<App/>',
  //利用钩子函数更新全局变量(不管用)
    // crated:function(){
    //   this.a=1
    // }
})
