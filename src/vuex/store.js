import Vue from 'vue';//这里为固定格式照抄

import Vuex from 'vuex';//这里为固定格式照抄

Vue.use(Vuex);//此为引用Vuex

//定义需要改变的变量
const state={

    num:0,
    domain:'http://localhost:8088/api/login', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: { //保存用户信息
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    },
    token:''
}


//定义改变变量的方法
const mutations={
   jia(state){
        state.num++;//这就代表上面num加加

    },
	jian(state){
	    state.num--;//同上
	},
	 //更新用户信息
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
}





// state: {
//         count: 1
// },
// mutations: {
//     increment(state, amount) {
//         state.count += parseInt(amount)
//     }
// },
// actions: {
//     increment(context, amount) {
//         context.commit('increment', amount)
//     }
// },
// getters: {
//     getCount(state) {
//         return state.count
//     }
// }

//把变量和方法暴露出去让外部访问
export default new Vuex.Store(
	{
	  state,
	  mutations
	}
)