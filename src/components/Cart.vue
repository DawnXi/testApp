<template>
	<div class="cart">
		<yd-navbar title="购物车">
			<router-link to="#" slot="left">
				<yd-navbar-back-icon onclick="window.history.go(-1)"></yd-navbar-back-icon>
			</router-link>
			<router-link to="./gg" slot="right" @click="delete_all">
				删除
			</router-link>

		</yd-navbar>
		<div @click="delete_all">div删除</div>
		<!-- 商品列表 -->
		<ul class="shop_list">
			<li class="test" @click="taggle">测试购物车</li>
			<li class="shop" v-if="state==1" ref="shopselected">
				<div class="shop_info">
					<div class="left">
						<i class="iconfont icon-ziyuan"></i>
						<div class="shopname">店铺：<span>无与伦比</span></div>
					</div>
					<div class="right">
						<div class="total">合计：<span>￥{{spinner3*39.90 | numFilter}}</span></div>
						<i class="iconfont icon-xiangshang"></i>
					</div>
				</div>
				<!-- 商品信息 -->
				<!-- <div class="goods_info" ref="goods">
					<div class="part_left">
						<i class="iconfont icon-ziyuan"></i>
						<img class="goods" src="../assets/picture/g5.jpg" alt="">
						<div class="goods_dtails">
							<div class="goods_title">2017秋季韩版新品显瘦女</div>
							<div class="color">颜色：<span>黑色</span></div>
							<div class="size">尺码：<span>25码【建议体重75-85斤】</span></div>
		                    <div class="numBox">
						        <yd-spinner v-model="spinner3"></yd-spinner>
						    </div>
						</div>
					</div>
					
					<div class="part_right">
						<div class="total">
							<span>￥39.90</span>
							<div class="old">￥57.00</div>
							<div class="delete_goods"></div>
							<i class="iconfont icon-icon-shanchu"></i>
						</div>
					</div>
				</div>

				<div class="goods_info" ref="goods">
					<div class="part_left">
						<i class="iconfont icon-ziyuan"></i>
						<img class="goods" src="../assets/picture/g5.jpg" alt="">
						<div class="goods_dtails">
							<div class="goods_title">2017秋季韩版新品显瘦女</div>
							<div class="color">颜色：<span>黑色</span></div>
							<div class="size">尺码：<span>25码【建议体重75-85斤】</span></div>
		                    <div class="numBox">
						        <yd-spinner v-model="spinner3"></yd-spinner>
						    </div>
						</div>
					</div>
					
					<div class="part_right">
						<div class="total">
							<span>￥39.90</span>
							<div class="old">￥57.00</div>
							<div class="delete_goods"></div>
							<i class="iconfont icon-icon-shanchu"></i>
						</div>
					</div>
				</div> -->
				<!--再添加到购物车的时候就需要对商品进行分组-->
				<!--格式如下：-->
				 <!--cartlist =[
							    {
							        "name": "大胖的店", //店铺名称 
							        "checked": false,  //店铺是否选中
							        "list": [
							            {
							                "name": "麻辣二胖", 
							                "price": 23, 
							                "realStock": 10, 
							                "fare": 1.5, 
							                "num": 1, 
							                "checked": false//商品是否选中
							            }, 
							            {
							                "name": "香辣二胖", 
							                "price": 21, 
							                "realStock": 2, 
							                "fare": 1.5, 
							                "num": 2, 
							                "checked": false
							            }, 
							            {
							                "name": "红烧二胖", 
							                "price": 88, 
							                "realStock": 8, 
							                "fare": 1.5, 
							                "num": 4, 
							                "checked": false
							            }
							        ]
							    }, 
							    {
							        "name": "二胖的店",  //店铺名称 
							        "checked": false, //店铺是否选中
							        "list": [
							            {
							                "name": "漂亮的裙子", 
							                "price": 166, 
							                "realStock": 10, 
							                "fare": 2, 
							                "num": 1, 
							                "checked": false//商品是否选中
							            }, 
							            {
							                "name": "漂亮的短袖", 
							                "price": 188, 
							                "realStock": 2, 
							                "fare": 1.5, 
							                "num": 2, 
							                "checked": false
							            }, 
							            {
							                "name": "漂亮的鞋子", 
							                "price": 299, 
							                "realStock": 1, 
							                "fare": 3, 
							                "num": 1, 
							                "checked": false
							            }
							        ]
							    }
							]-->
				 <!-- 测试购物车数据渲染 -->
				<div v-for='(item,index) in testdata' class="goods_info" ref="goods">
					<div class="part_left">
						<i class="iconfont icon-ziyuan" :class="is_select==index ? 'active' : ''" @click="select(index)"></i>
						<img class="goods" :src="item.showLarge.img" alt="">
						<div class="goods_dtails">
							<div class="goods_title">{{item.title}}</div>
							<div class="color">颜色：<span>黑色</span></div>
							<div class="size">尺码：<span>25码【建议体重75-85斤】</span></div>
							<div class="numBox">
								<yd-spinner v-model="spinner3" key="index"></yd-spinner>
							</div>
						</div>
					</div>

					<div class="part_right">
						<div class="total">
							<span>￥39.90</span>
							<div class="old">￥57.00</div>
							<div class="delete_goods"></div>
							<i class="iconfont icon-icon-shanchu" @click="del(index,item)"></i>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<!-- 失效商品列表 -->
		<ul class="invalid_goodslist" v-if="old_goods==1">
			<li class="invalid_goods">
				<div class="part_left">
					<img class="invalid" src="../assets/picture/g5.jpg" alt="">
					<div class="goods_dtails">
						<div class="goods_title">2017秋季韩版新品显瘦女</div>
						<div class="color">颜色：<span>黑色</span></div>
						<div class="size">尺码：<span>25码【建议体重75-85斤】</span></div>
					</div>
				</div>

				<div class="part_right">
					<div class="total">
						<i class="iconfont icon-icon-shanchu"></i>
					</div>
				</div>
			</li>

			<li class="invalid_goods">
				<div class="part_left">
					<img class="invalid" src="../assets/picture/g5.jpg" alt="">
					<div class="goods_dtails">
						<div class="goods_title">2017秋季韩版新品显瘦女</div>
						<div class="color">颜色：<span>黑色</span></div>
						<div class="size">尺码：<span>25码【建议体重75-85斤】</span></div>
					</div>
				</div>

				<div class="part_right">
					<div class="total">
						<i class="iconfont icon-icon-shanchu"></i>
					</div>
				</div>
			</li>

			<li class="invalid_goods">
				<div class="part_left">
					<img class="invalid" src="../assets/picture/g5.jpg" alt="">
					<div class="goods_dtails">
						<div class="goods_title">2017秋季韩版新品显瘦女</div>
						<div class="color">颜色：<span>黑色</span></div>
						<div class="size">尺码：<span>25码【建议体重75-85斤】</span></div>
					</div>
				</div>

				<div class="part_right">
					<div class="total">
						<i class="iconfont icon-icon-shanchu"></i>
					</div>
				</div>
			</li>
		</ul>
		<div class="clear_old_goods" @click="clear" v-if="is_cleared==0">清空失效商品</div>
		<!-- 结算模块 -->
		<div class="account">
			<div class="check_all">
				<i class="iconfont icon-ziyuan"></i>
				<span>全选</span>
			</div>
			<div class="middle">
				<div class="all">
					合计：
					<span>￥58.70</span>
					<div class="text">不含运费、优惠扣减</div>
				</div>
			</div>
			<div class="go_buy">去结算(2)</div>
		</div>
		<yd-backtop></yd-backtop>

	</div>
</template>

<script type="text/babel">
	//引入组件 import Footer from '@/components/Footer' export default { data() { return { spinner3: 0, goods: '', shopselected:0, goodsselected:0, state:1, old_goods:1, is_cleared:0, //购物车的测试数据 testdata:[], is_select:0, } }, methods:{ taggle(){ alert("hhh1") if (this.state==1) { this.state=0 } }, clear(){ let con; con=confirm("确定清空失效商品?"); //在页面上弹出确认框 if(con==true){ this.old_goods=0; this.is_cleared=1; } }, delete_all(){ console.log(this.$refs.goods) }, select(index){ alert("ff") this.is_select=index; }, del(index,item){ let params = { userid: "userhhh", iid: "hhh" } alert(item.title) this.testdata.splice(index, 1); this.$http({ method: 'post', url: 'http://localhost:8088/api/delcart/', data:params // data: {iid: this.iid, stockid: stockid, sum: this.spinner1}//此种方式会发送两次请求 //并且数据在里request playload里而不在formdata里 }).then(function (response) { console.log(response); }).catch(function (error) { console.log(error); }) } }, filters:{ numFilter(value) { // 截取当前数据到小数点后两位 let realVal = Number(value).toFixed(2) // num.toFixed(2)获取的是字符串 return realVal } }, //使用钩子函数在加载页面时加载数据 created: function () { // `this` 指向 vm 实例 // console.log('a is: ' + this.a) //发送ajax 请求数据 this.$http.get("http://localhost:8088/api/cartgoods/") .then((response)=> { this.testdata=response.data; console.log(response.data); }) .catch((error)=> { console.log(error) }) // 此处操作全局变量 // this.$root.a = 1 }, mounted: function(){ // this.$http({ // method: 'get', // url: 'http://localhost:8088/api/getgoods/', // // data: {iid: this.iid, stockid: stockid, sum: this.spinner1}//此种方式会发送两次请求 // //并且数据在里request playload里而不在formdata里 // }).then(function (response) { // console.log(response); // }).catch(function (error) { // console.log(error); // }) //功能未完善： //注册登录的身份验证，首次注册或者登录时账号密码的保护问题，jwt和传统session登录验证的优缺点比较 //点击购物车商品删除时 向后台发送ajax 从数据库删除购物车 //如果需要照着例子来 要把获取到的数据进行解析 变成和例子相同的数据结构 //（现在的主要问题：1.只能单选进行选择和删除不能进行多选操作 2.价格计算器相互耦合，不能分开计算 3.数据一次性渲染 不能分店铺进行渲染 //4.不能分店铺进行商品删除和价格计算 5.不能全选商品进行价格计算和商品删除） //获取美丽说商品数据后，通过node转化成sql语句存入数据库 //购物车的商品按商家分类，购物车功能的实现，提交购物车到后台 后台添加到购物车表 实现前后端联动 //在购物车页面提交商品信息后 至少要实现在已付款界面能看到我提交的这笔订单 在商品详情页点击购买时也应该一样 //搜索查询的优化，可以出现智能提示 //首页分类点击时进入相应的分类页面 //路由懒加载 后端渲染 性能优化 打包成app //实现一个小程序版本的美丽说 } }
</script>

<style scoped>
	.cart {
		background: #f4f4f4;
		margin-bottom: 2rem;
	}
	
	.shop,
	.invalid_goodslist {
		margin-bottom: .3rem;
		background: #fff;
		padding: 0 .2rem;
	}
	
	.shop_info {
		display: flex;
		justify-content: space-between;
		line-height: 1.2rem;
		font-size: .3rem;
		color: #666;
		border-bottom: #ddd solid 1px;
	}
	
	.shop_info .left {
		display: flex;
		align-items: center;
	}
	
	.up {
		display: inline-block;
	}
	
	.total {
		display: inline-block;
	}
	
	img.goods,
	img.invalid {
		width: 1.5rem;
		height: 1.5rem;
	}
	
	.goods_info,
	.invalid_goods,
	.account,
	.check_all {
		display: flex;
		justify-content: space-between;
		height: 2.5rem;
	}
	
	.goods_dtails {
		text-align: left;
		margin-left: 10px;
	}
	
	.part_left {
		display: flex;
		align-items: center;
	}
	
	.invalid_goods {
		border-bottom: #ddd solid 1px;
		opacity: .6;
	}
	
	.account,
	.check_all {
		height: 1.25rem;
		height: 1.25rem;
		line-height: 1.25rem;
	}
	
	.account {
		width: 100%;
		background: #fff;
		border-top: #ddd solid 1px;
		position: fixed;
		left: 0;
		bottom: 1rem;
	}
	
	.go_buy {
		height: .8rem;
		line-height: .8rem;
		font-size: .3rem;
		padding: 0 .4rem;
		border-radius: 3px;
		color: #fff;
		background: #f66;
		float: right;
		margin-right: 0.4rem;
		margin-top: .2rem;
	}
	
	.all {
		text-align: left;
		font-size: .33rem;
		line-height: .4rem;
		margin-top: .2rem;
	}
	
	.text {
		font-size: .3rem;
	}
	
	.icon-ziyuan {
		font-size: .5rem;
		color: #ff95ae;
		padding: 0 .2rem;
	}
	
	.goods_title {
		font-size: .3rem;
	}
	
	.color {
		color: #999;
		font-size: .23rem;
	}
	
	.size {
		color: #999;
		font-size: .23rem;
	}
	
	.total span {
		font-size: .3rem;
		color: #ff95ae;
	}
	
	.old {
		font-size: .15rem;
		color: #999;
		text-decoration-line: line-through;
	}
	
	.icon-xiangshang {
		font-size: .5rem;
		color: #999;
	}
	
	.icon-icon-shanchu {
		display: block;
		font-size: .5rem;
		color: #ddd;
		margin-top: .2rem;
	}
	
	.check_all span {
		font-size: .25rem;
	}
	
	.clear_old_goods {
		margin-bottom: 150px;
	}
	
	.icon-ziyuan {
		color: #ccc;
	}
	
	.icon-ziyuan.active {
		color: #ff95ae;
	}
</style>