<template>
  <div class="shop">
    <yd-navbar title="果果e家">
        <router-link to="#" slot="left">
            <yd-navbar-back-icon onclick="window.history.go(-1)"></yd-navbar-back-icon>
        </router-link>
        <router-link to="#" slot="right">
            <yd-icon name="type"></yd-icon>分类
        </router-link>
    </yd-navbar>
    
    <div class="shop_head">
      <a class="shop_info" href="javascript:void(0)">
        <div class="shop_logo" style="background-image: url(http://s3.mogucdn.com/b7/pic/151107/n41a1_ifrweyzrhe2weolcgqzdambqhayde_320x320.jpg_100x100.jpg);"></div>
        <h3 class="shop_nick">艾格莉娜</h3></a>
    </div>
    <div class="shop_main">
      <div class="nums">商品：
        <span>152</span>粉丝：
        <span>8089</span></div>
      <!-- <p class="shop_desc">YIGELILA，懂女人，更懂连衣裙</p> -->
      <div class="follow">
        <div class="operate_btn follow_btn js_follow_btn" data-follow="0">
           <i class="iconfont icon-xaingzuo"> </i>收藏店铺</div>
        <a class="operate_btn customer_service js_customer_service" data-href="http://webim.meilishuo.com/wechat#detail/user/11a82lm">
           <i class="iconfont icon-xiaoxi"> </i>联系客服</a>
      </div>
    </div>

     <yd-tab>
        <yd-tab-panel label="默认"></yd-tab-panel>
        <yd-tab-panel label="最新"></yd-tab-panel>
        <yd-tab-panel label="销量"></yd-tab-panel>
        <yd-tab-panel label="价格"></yd-tab-panel>
    </yd-tab>

    
  </div>
</template>

<script type="text/babel">
    export default {
        
    }
</script>

<style scoped>
    .shop_head{
            background: url(http://s17.mogucdn.com/p1/160803/idid_ifrdeolemuygknrsmezdambqmeyde_640x222.png);
    margin-top: -.45rem;
    background-size: cover;
    padding-top: 0.454rem;
    padding-bottom: .2rem;
    }
    .shop_logo {
        width: 1.3rem;
        height: 1.3rem;
        margin: .42rem auto 0;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: center;
        background-size: cover;
    }

    h3.shop_nick {
        font-size: .3rem;
        color: #fff;
        margin-top: .2rem;
    }

    .follow {
        width: 5rem;
        display:  flex;
        justify-content:  space-between;
        margin:  0 auto;
    }

    .operate_btn {
        float: left;
        width: 1.74rem;
        line-height: .6rem;
        margin: 0 .2rem;
        border: 1px solid #666;
        -webkit-border-radius: .14rem;
        border-radius: .14rem;
        font-size: .26rem;
        text-align: center;
    }
    .operate_btn i{
        margin-right: .05rem;
    }
</style>
