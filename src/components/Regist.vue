<template>
  <div class="login">
    <yd-navbar title="登录">
        <router-link to="#" slot="left">
            <div @click="back">
                <yd-navbar-back-icon >返回</yd-navbar-back-icon>
            </div>
        </router-link>
        <router-link to="#" slot="right">
            忘记密码
        </router-link>
    </yd-navbar>

    <form action="">
        <div class="text">美丽说帐号</div>
        <input type="text" class="username" v-model="username" @blur="blur1" placeholder="输入用户名/邮箱/手机">
        <div class="text">密码</div>
        <input type="password" class="password" v-model="pwd" @blur="blur2" placeholder="输入密码">
        <div class="submit"  @click="login">免密登录</div>
    </form>

    <div class="other">
        <div class="no_password">免密登录</div>
        <div class="register">免密登录</div>
    </div>

    <div class="qq">
        <span class="logon_line fl"></span>
        <div class="or">or</div>
        <span class="logon_line fr"></span>
        <div class="icon"></div>
    </div>
    <yd-popup masker-opacity=0 v-model="show1" position="center" >
        <div style="background-color:#fff;">
            <p class="tips">{{ msg }}</p>
        </div>
    </yd-popup>
  </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input1: 'ydui@qq.com',
                input2: '',
                input3: '',
                result: '',
                show1: false,
                msg:'',
                username:'',
                pwd:'',
                input1: '',
                input2: '',
                input9: '',
                result: ''
            }
        },
        methods:{
            // 引入加密算法
            // 1.先安装 
            // 2.引入 import crypto from 'crypto' 或 require("js-sha256").sha256


            // sha256加密密码
            // 3.编写加密函数
        setMd5(pwd){
            let crypto = require("crypto")
            let md5 = crypto.createHash("md5")
            md5.update(pwd);
            return  md5.digest('hex');
        },
          password_sha(pwd){
            let sha256 = require("js-sha256").sha256//这里用的是require方法，所以没用import
            return  sha256(pwd)
          },
            check(){
                console.log("hbhjbj")
                // const input = this.$refs.input1;
                // this.result = `{<br />  valid：${input.valid}，<br />  errorMes：'${input.errorMsg}'，<br />  errorCode：'${input.errorCode}'<br />}`;
            },
            login:function(){
               if (this.username && this.pwd) {
                //一般要跟后端了解密码的加密规则
                //MD5加密
                //md5+js-sha256为盐值
                let pwdmd5 = this.setMd5("md5+js-sha256"+this.pwd)
                //哈希加密 
                let password = this.password_sha(this.pwd)
                

                //需要想后端发送的登录参数
                // let registParam = {
                //     account: this.username,
                //     password:password
                // }
                //直接传递对象为参数会使 Content-Type 强制转换为application/json;charset=UTF-8并且发送两次请求数据在里request playload里而不在formdata里
                let registParam = new URLSearchParams()
                registParam.append('account', this.username)
                registParam.append('password', password)
                //请求后端
								
                this.$http( 
                //'http://localhost:8088/api/login',//这种配置方式不清晰
                 //{param: registParam}////此种方式会发送两次请求并且数据在里request playload里而不在formdata里
                 {
                    method:'post',
                    url: 'http://localhost:8088/api/regist',
                    data:registParam
                 }
                 ).then((response) => {
                    if(response.data.code == 1){
                        alert("注册成功！ 请登录")
                      //跳转
                      this.$router.push('/'); 
                    }
                  }, (response) => {
                    //Error
                  });
               }
            },
            back:function(){
                this.$root.a=1;
                window.history.go(-1)
            },
            blur1(){
                if (this.username=='') {
                    this.show1 = true
                    this.msg="输入用户名/邮箱/手机"
                }
            },
            blur2(){
               if (this.pwd=='') {
                    this.show1 = true
                    this.msg="请输入密码"
                }
            },
        },
        created:function(){
            this.footer  = false
        },
        mounted:function(){
            this.$root.a  = 0
        }
    }
</script>

<style scoped>
body{
    background: #fff;
}
/*表单*/
form{
    margin-top: .5rem;
    width: 95%;
    text-align:  center;
    margin:  0 auto;
    position:  relative;
     top: .5rem; 
}
form input{
     width: 80%;
    margin: 0 auto;
    border: none;
    line-height: 1.2rem;
    font-size: 0.5rem;
    text-align: center;
    border-bottom: #dddddd solid 1px;
}
form .submit{
    width: 100%;
    height:  1rem;
    line-height:  1rem;
    font-size: .5rem;
    margin: 0 auto;
    color: #fff;
    background: #ff1877;
    margin-top: .3rem;
    border-radius: 3px;
}
form .text{
    font-size: .3rem;
    text-align: center;
    margin-bottom: .3rem;
    margin-top: 0.3rem;
}

::-webkit-input-placeholder { /* WebKit browsers */
color: #ededed;
}
::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color: #ededed;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #ededed;
}
::-ms-input-placeholder { /* Internet Explorer 10+ */
color: #ededed;
}
.other{
    width: 95%;
    margin:  0 auto;
    height: 1rem;
    font-size: .3rem;
    line-height: 1rem;
    color: red;
    margin-top: .5rem;
}
.other .no_password{
    float:  left;
}
.other .register{
    float:  right;
}

/*qq登录*/
.qq{
    width: 80%;
    margin:  0 auto;
    text-align:  center;
}
.qq span.logon_line{
    display: inline-block;
    width: 2.67rem;
    height: .2rem;
    border-bottom: .01rem solid #f1f1f1;
}
.qq .or{
    font-size: .3rem;
    display:  inline-block;
}
.qq .icon{
    width: 2.1rem;
    height:  2.1rem;
    margin:  0 auto;
    background: url("https://s10.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png");
    background-size:  contain;
    margin-top: .3rem;
    overflow: hidden;
    background-size: cover;
}
/*注册*/
.code{
    position:  absolute;
    right: 0px;
    top: 2.5rem;
    color: red;
}
.service{
    line-height: 1rem;
    text-align: center;
}
.service a{}

.yd-input {
    width: 80%;
    margin: 0 auto;
    border: none;
    line-height: 1.2rem;
    font-size: 0.5rem;
    text-align: center;
    border-bottom: #dddddd solid 1px;
}
.tips{
    padding: .2rem .24rem;
    font-size: .28rem;
    color: #fff;
    line-height: 1.5;
    text-align: center;
    border-radius: .06rem;
    background-color: rgba(225,42,82,.7);
}
</style>
