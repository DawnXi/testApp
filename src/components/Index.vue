<template>
  <div class="index">
    <yd-navbar title="">
        <router-link to="./cart" slot="left">
            <yd-icon name="shopcart-outline" size="25px" color="#777"></yd-icon>
        </router-link>
        <router-link to="./mycenter" slot="right">
            <yd-icon name="ucenter-outline" size="25px" color="#777"></yd-icon>
        </router-link>
    </yd-navbar>
    
    <div class="main" <div v-if="false"></div>>
         <yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../assets/picture/m1.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../assets/picture/m2.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../assets/picture/m3.jpg">
            </a>
        </yd-slider-item>
    </yd-slider>
    <yd-search class="search" :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
    <button @click="test">测试post请求</button>
    <yd-flexbox>
        <yd-flexbox-item>
            <img class="block_icon" src="../assets/images/k1.gif">
            <span class="nav">圣诞种草</span>
        </yd-flexbox-item>
        <yd-flexbox-item>
            <img class="block_icon" src="../assets/images/k2.png">
            <span class="nav">新品速递</span>
        </yd-flexbox-item>
        <yd-flexbox-item>
            <img class="block_icon" src="../assets/images/k3.png">
            <span class="nav">大家都在买</span>
        </yd-flexbox-item>
        <yd-flexbox-item>
            <img class="block_icon" src="../assets/images/k4.png">
            <span class="nav">签到领券</span>
        </yd-flexbox-item>
    </yd-flexbox>
    <yd-navbar title="本周流行"></yd-navbar>
        <yd-flexbox>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/3.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/2.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/1.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/3.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/3.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/2.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/1.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <img class="block_icon" src="http://static.ydcss.com/uploads/ydui/3.jpg">
                <span>圣诞种草</span>
            </yd-flexbox-item>
        </yd-flexbox>
    <yd-navbar title="查看更多 》"></yd-navbar>

    <yd-tab v-model="tab2" :callback="fn" :prevent-default="false" :item-click="itemClick">
        <yd-tab-panel v-for="title in items" :label="title.label">
            <yd-list theme="2">
               <yd-list-item v-for="item, key in list" :key="key" type="link" :href="'./detail/'+item.iid">
                        <img slot="img" :src="item.show.img">
                        <span slot="title">{{item.title}}</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                            </div>
                            <div>content</div>
                        </yd-list-other>
                  
                </yd-list-item>
            </yd-list>
        </yd-tab-panel>

    </yd-tab>
    <yd-backtop></yd-backtop>
    </div>
    
  </div>
</template>

<script type="text/babel">


//引入jsonp组件
import thisisjsonp from 'jsonp'; 
    export default {
        data() {
            return {
                input1: 'ydui@qq.com',
                input2: '',
                input3: '',
                result: '',
                 value2: '',
                result: [],
                tab2: 0,
                //list 通过下方钩子函数中的ajax方法获取
                items: [
                    {label: '流行' },
                    {label: '新款' },
                    {label: '精选' }
                ],
                list:[]
            }
        },
        methods:{
            check(){
                console.log("hbhjbj")
                // const input = this.$refs.input1;
                // this.result = `{<br />  valid：${input.valid}，<br />  errorMes：'${input.errorMsg}'，<br />  errorCode：'${input.errorCode}'<br />}`;
            },
            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            itemClickHandler(item) {
                this.$dialog.toast({mes: `搜索：clickhhh`});
            },
            submitHandler(value) {
                if (value != '') {
                    this.$root.wd=value
                    this.$dialog.toast({mes: `搜索：value`});
                    //编程式路由跳转
                    this.$router.push('/search');
                }
                else{
                    this.$dialog.toast({mes: '请输入搜索关键字'});
                }

            },
            test(){
                this.$http({
                  method: 'post',
                  url: 'http://localhost:8088/api/search/',
                  data:{'wd':'上衣'}//参数对象直接这样写后台获取不到数据（数据不在formdata里面）
                  //data: {wd: value}这种方法会发送两种请求
                }).then((response)=> {//tips 不用箭头函数会导致this指针混乱  找不到组件下的变量
                    if (response.data[0].title) {
                        this.list = response.data
                    }
                    else{
                        this.nodata = 1
                    }
                }).catch((error)=> {
                  console.log(error);
                })




                // this.wd = '上衣'
                // let params = new URLSearchParams()
                // params.append('wd', this.wd)
                // this.$http({
                //   method: 'post',
                //   url: 'http://47.90.203.87:8088/api/search/',
                //   data:params
                //   //data: {wd: value}这种方法会发送两种请求
                // }).then((response)=> {//tips 不用箭头函数会导致this指针混乱  找不到组件下的变量
                //     if (response.data[0].title) {
                //         this.list = response.data
                //     }
                //     else{
                //         this.nodata = 1
                //     }
                // }).catch((error)=> {
                //   console.log(error);
                // })
            },
            //获取数据的方法
            fn(label, key) {
                console.log(label, key);
            },
            itemClick(key) {
                //定义ajax地址
                let url = '';
                //判断选项卡
                this.$dialog.loading.open('数据加载中');
                if (key==0) {
                    url = 'http://localhost:8088/api/liuxing/#/';
                }
                else if(key==1){
                    url = 'http://localhost:8088/api/xinkuan/#/';
                }
                else{
                     url = 'http://localhost:8088/api/jingxuan/#/';
                }
            //发送ajax 请求数据
            this.$http.get(url)
                .then((response)=> {
                    this.tab2 = key;
                    this.$dialog.loading.close();
                    // this.items[this.items[key]].list=response.data;
                    this.list=response.data;
                })
                .catch((error)=> {
                    console.log(error)
                }) 

          

           // todo jsonp有问题 jsonp is not defined
        //     if (key==1) {
        //         url = 'http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=6ccce773-b05f-496a-97f2-2a00cf3d2c7e&sort=pop&_=1528041156605&callback=jsonp';
        //     }
        //     else if(key==2){
        //         url = 'http://list.meilishuo.com/search?frame=1&page=2&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=6ccce773-b05f-496a-97f2-2a00cf3d2c7e&sort=pop&_=1528041156605&callback=jsonp';
        //     }
        //     else{
        //        url = '47.90.203.87:8088/jingxuan/#/';
        //    }
        //    var param={
        //        param:'jsonp'//此处的jsonp4是对应的回调函数名称
        //    };
        //    thisisjsonp(url,param,(err,data)=>{
        //       if(!err){
        //         console.log(data.list)
        //     }
        //     else{
        //         console.log(err)
        //     }

        // });
       }
        },
        watch: {
            value2(val) {
                this.result = this.getResult(val);
            }
        },
        // 使用组件
        components:{
            // 'v-footer':Footer
        },
        //使用钩子函数在加载页面时加载数据
        created: function () {
            // `this` 指向 vm 实例
            // console.log('a is: ' + this.a)
            //发送ajax 请求数据
            this.$http.get("http://localhost:8088/api/getgoods/#/")
                .then((response)=> {
                    this.list=response.data;
                })
                .catch((error)=> {
                    console.log(error)
                })
                // 此处操作全局变量
                // this.$root.a = 1
        }
    }
</script>

<style scoped>
/*.index{*/
    .block_icon{
        width: 100%;
        padding: 10%;
    }
    .block_icon{
        width: 100%;
        padding: 10%;
    }
    .yd-list-other{
        justify-content: center;
    }
    .yd-tab-active:before {
        content: "";
        width: 70%;
        height: 2px;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -35%;
        z-index: 4;
        background-color: currentColor;
    }
    .yd-tab-nav:after {
        display: none;
    }
    .yd-tabbar{
        position: fixed;
        left: 0;
        bottom: 0;
    }
    
    .search{
        position: absolute;
        top: 0;
        width: 80%;
        left: 10%;
        background: #fff;
    }
    .search .yd-search-input{
        background: #fff !important;
    }
    .search .yd-search-input{
        background: #ddd;
    }
    .search .yd-search-input:before{
        border-top: none;
    }
    .search .yd-search-input:after{
        border-bottom: none;
    }
    .nav{
        font-size: .3rem;
    }
/*}*/

</style>
