<template>
  <div id="app">
    <router-view/>
    <v-footer  v-if="$root.a==1"></v-footer>
  </div>
</template>

<script>
//引入组件
// import Footer from 'components/Footer';//报错  找不到组件
import Footer from '@/components/Footer'
export default {
  name: 'App',
   // 使用组件
  components: {
      'v-footer': Footer
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      //cookie操作方法在源码里有或者参考网上的即可
      if(!this.$store.state.token){
        //如果没有登录状态则跳转到登录页
        this.$router.push('/login');
      }else{
        //否则跳转到登录后的页面
        this.$router.push('/cart');
      }
    },
    //请求用户的一些信息
    getUserInfo(){
      this.userInfo = {
        nick: 'Doterlin',
        ulevel: 20,
        uid: '10000',
        portrait: 'images/profile.png'
      }

      //获取信息请求
      this.$http.get("http://localhost:8088/api/login", {
        //参数
        "params": this.userInfo
      }).then((response) => {
        //Success
        if(response.data.code == 0){
          this.$store.commit('updateUserInfo', this.userInfo); 
        }
      }, (response) => {
        //Error
      });
    },
  },
    //利用钩子函数更新全局变量{改不了}
    // crated:function(){
    //   $root.a=1
    // }
  //进入页面时检查登录
  created(){
   // this.checkLogin();
  },
  mounted(){
    //组件开始挂载时获取用户信息
    //this.getUserInfo();
  },
   //监听路由变化检查登录
  watch:{
    //"$route" : 'checkLogin'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
}
body{
  background: #fff;
}
.footer{
      width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
}
form.search-input{
  background: #f2f2f2 !important;
}
.yd-search-input{
  background: #fff !important;
}
.yd-tab {
    margin-bottom: 80px;
}
.v-footer >>> a{
  color:red !important;
}
</style>
