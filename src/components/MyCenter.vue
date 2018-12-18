<template>
	<div class="mycenter">
		<yd-navbar title="个人中心">
	        <router-link to="#" slot="left">
	            <yd-navbar-back-icon onclick="window.history.go(-1)"></yd-navbar-back-icon>
	        </router-link>
	        <router-link to="#" slot="right">
	            推出
	        </router-link>
	    </yd-navbar>

		<!-- 个人信息 -->
		<div class="my_info">
			<img src="../assets/images/k2.png" alt="" class="my_head">
			<div class="myname">的士大夫大师傅十分</div>
			<div class="my_details">
				<div class="my_collect">
					<div class="collect_item">
						<div class="number">2</div>
						<div class="text">收藏的宝贝</div>
					</div>
					<div class="collect_item">
						<div class="number">2</div>
						<div class="text">收藏的店铺</div>
					</div>
				</div>
				<div class="my_others">
					<div class="other_item">
						<div class="icon"></div>
						<div class="text">优惠券</div>
					</div>
					<div class="other_item">
						<div class="icon"></div>
						<div class="text">收货地址</div>
					</div>
				</div>
			</div>
		</div>
	</div>
 


</template>

<script>
//引入组件
import Footer from '@/components/Footer'
export default {
    data(){
        return{
            // 使用组件
            components:{
                // 'v-footer': Footer
            }
        }
    }
}
</script>

<style scoped>
/*个人信息*/
.my_info {
    width:  100%;
    /* height:  300px; */
    /* padding-bottom: 10px; */
    /* background: #eb8503; */
    text-align: center;
    color: #fff;
    background: url("../assets/images/my_bg.jpg");
    background-size: 100% 100%;
}

.my_info {}

img.my_head {
    display:  inline-block;
    width: 80px;
    height: 80px;
    background:  red;
    border-radius: 80px;
    margin-top: 20px;
}

.myname {
    font-size: 0.25rem;
    line-height: 30px;
    margin-bottom: .3rem;
}

.my_details {
    width:  100%;
    /* height:  80px; */
    /* background:  greenyellow; */
    border-top: #fff solid 1px;
    /* padding-bottom: 10px; */
    /* color: #fff; */
    overflow:  hidden;
}

.my_collect {
    width:  50%;
    /* height: 100%; */
    float:  left;
    padding-top: 22px;
    /* border-right:  red solid; */
}

.collect_item {
    display:  inline-block;
    display: inline-block;
    width: 48%;
    /* line-height: 100%; */
    /* height: 87px; */
    /* text-align: left; */
    font-size: 0.27rem;
    /* padding-bottom: 25px; */
    /* padding-bottom: 25px; */
    /* display: inline-block; */
    /* background: tan; */
}

.my_others {
    width: 49%;
    float: right;
    padding-bottom: 15px;
    padding-top: 10px;
    border-left: #fff solid 1px;
}

.other_item {
    display:  inline-block;
    width: 48%;
    font-size: 0.3rem;
    /* display: inline-block; */
    /* background: tan; */
}
.other_item .icon {
    width: 0.5rem;
    height: 0.5rem;
    background: url(../assets/images/icons2.png) no-repeat -2% 100%;
    background-size: 3.5rem;
    display: inline-block;
}

</style>
