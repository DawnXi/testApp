<template>
	<div class="main">
		<div class="detail" v-if="goods">
		<div class="primary_swiper">
			<div class="wrapper" :style=wrapperw>
				<div class="item" :style=itemw v-for="item in topimgs">
					<img :src='item '></div>
			</div>
		</div>
		<p class="tl" @click="addcart">{{ goods.itemInfo.title }}</p>
		<div class="price_info tl">
			<span class="new">¥{{ goods.itemInfo.highNowPrice }}</span>
			<span class="old">¥{{ goods.itemInfo.highPrice }}</span>
			<span class="discount">火热促销</span></div>
		<div class="info_other flex">
			<span class="info_item">{{ goods.columns[0] }}</span>
			<span class="info_item">{{ goods.columns[1] }}</span>
			<span class="info_item">72小时发货</span>
			<span class="info_item">{{ goods.columns[2] }}</span></div>
		<div class="services tl">
			<span class="icon"></span>
			<span>退货补运费</span>
			<span class="icon"></span>
			<span>全国包邮</span>
			<span class="icon"></span>
			<span>7天无理由退货</span>
			<span class="ir"></span>
		</div>
		<div class="promotion">
			<div class="tl">优惠活动</div>
			<div class="promotion_list flex">
				<div class="promotion_item get_pro " data_id="1hv5t1l2e">
					<div class="promotion_text">
						<div>
							<span class="promotions_num">5</span>元</div>
						<div>满99立减</div></div>
				</div>
				<div class="promotion_item get_pro " data_id="1hv5t1l2i">
					<div class="promotion_text">
						<div>
							<span class="promotions_num">10</span>元</div>
						<div>满199立减</div></div>
				</div>
				<div class="promotion_item get_pro " data_id="1hv5t1l2k">
					<div class="promotion_text">
						<div>
							<span class="promotions_num">15</span>元</div>
						<div>满299立减</div></div>
				</div>
				<div class="promotion_item get_pro " data_id="1hv5t1l2u">
					<div class="promotion_text">
						<div>
							<span class="promotions_num">20</span>元</div>
						<div>满399立减</div></div>
				</div>
			</div>
		</div>
		<div class="services tl">
			<span class="icon"></span>
			<span>用户名</span>
			<div class="shop_collect">+ 收藏</div></div>
		<yd-flexbox>
			<yd-flexbox-item class="info">
				<div class="info_item">
					<span class="fz-18">7779</span>
					<br>总销量</div>
				<div class="info_item">
					<span class="fz-18">202</span>
					<br>全部宝贝</div></yd-flexbox-item>
			<yd-flexbox-item class="tl">
				<div class="shop-evaluate">
					<ul>
						<li>
							<span>描述相符</span>
							<em>4.99</em>
							<i>高</i>
						</li>
						<li>
							<span>价格合理</span>
							<em>5</em>
							<i>高</i>
						</li>
						<li>
							<span>质量满意</span>
							<em>4.99</em>
							<i>高</i>
						</li>
					</ul>
				</div>
			</yd-flexbox-item>
		</yd-flexbox>
		<div class="enter">进店逛逛</div>
		<yd-slider autoplay="100000000">
			<yd-slider-item>
				<yd-grids-group :rows="4" item-height="130px">
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=89">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=345">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=321">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=400">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=520">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
				</yd-grids-group>
			</yd-slider-item>
			<yd-slider-item>
				<yd-grids-group :rows="4" item-height="130px">
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=89">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=345">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=321">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=400">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=520">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
				</yd-grids-group>
			</yd-slider-item>
			<yd-slider-item>
				<yd-grids-group :rows="4" item-height="130px">
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=89">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=345">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=321">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=399">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=400">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
					<yd-grids-item>
						<div slot="else" style="text-align: center;">
							<img src="https://picsum.photos/500/500?image=520">
							<span>kjbhjbj</span></div>
					</yd-grids-item>
				</yd-grids-group>
			</yd-slider-item>
		</yd-slider>
		<yd-tab>
			<yd-tab-panel label="图文详情"></yd-tab-panel>
			<yd-tab-panel label="商品参数"></yd-tab-panel>
			<yd-tab-panel label="评价(1817)"></yd-tab-panel>
			<yd-tab-panel label="热卖推荐"></yd-tab-panel>
		</yd-tab>
		<div class="graphic-list">
			<div class="desc clearfix">
				<p class="start">
					<i>
					</i>
				</p>
				<p class="text">{{ goods.detailInfo.desc }}</p>
				<p class="end">
					<i>
					</i>
				</p>
			</div>
			<div class="pics">
				<dl class="pic-box" v-if="this.detailimgs1">
					<dt class="pic-title">穿着效果</dt>
					<dd class="pic-list" v-for="item in this.detailimgs1">
						<img class="fadeIn" :src="item"></dd>
				</dl>
				<dl class="pic-box" v-if="this.detailimgs2">
					<dt class="pic-title">整体款式</dt>
					<dd class="pic-list" v-for="item in this.detailimgs2">
						<img class="fadeIn" :src="item"></dd>
					</dd>
				</dl>
				<dl class="pic-box" v-if="this.detailimgs3">
					<dt class="pic-title">细节做工</dt>
					<dd class="pic-list" v-for="item in this.detailimgs2">
						<img class="fadeIn" :src="item"></dd>
					</dd>
				</dl>
			</div>
		</div>
		<div class="parameter-wrap">
			<!-- 尺码表格 -->
			<div class="size-list">
				<div class="table">
					<table>
						<tbody>
							<tr>
								<td>尺码</td>
								<td>S【建议80-100斤】</td>
								<td>M【建议100-120斤】</td>
								<td>L【建议120-140斤】</td></tr>
							<tr>
								<td>胸围</td>
								<td>90</td>
								<td>95</td>
								<td>100</td></tr>
							<tr>
								<td>袖长</td>
								<td>24</td>
								<td>25</td>
								<td>25</td></tr>
							<tr>
								<td>肩宽</td>
								<td>37</td>
								<td>38</td>
								<td>39</td></tr>
							<tr>
								<td>衣长</td>
								<td>60</td>
								<td>62</td>
								<td>64</td></tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- 参数 -->
			<div class="param-list">
				<ul>
					<li v-for="item in goods.itemParams.info.set">
						<span class="param-name">{{ item.key }}</span>
						<p class="param-info">{{ item.value }}</p></li>
				</ul>
			</div>
			<!-- 尺码图片 -->
			<!-- 尺码图片 --></div>
		<div class="detail-wrap detail-rates" id="DetailRates">
			<!-- 顶部 -->
			<div class="rates-top"></div>
			<!-- 标题 -->
			<div class="rates-head plr30">
				<a class="rates-title" :href="'#/ratelist/'+this.iid">
					<span>购买评价</span>
					<span class="more tr">更多 ></span>
				</a>
			</div>
			<!-- 列表 -->
			<div class="rates-list plr30" v-if='goods.rate' v-for="item in goods.rate.list">
				<div class="rate-item">
					<!-- 用户信息 -->
					<div class="rate-user">
						<!-- <a class="user-info" href="" data-isanonymous="1"> <img class="avatar" src="//s3.mogucdn.com/p2/161214/103488673_527fecjlbb7f05fihi1aggde73jb8_140x140.png_100x100.jpg"> <span class="name">木土廿口北灬亻义</span></a> -->
						<span class="user-info">
							<img class="avatar" :src="item.user.avatar">
							<span class="name">{{ item.user.uname}}</span></span>
					</div>
					<!-- 评价内容 -->
					<div class="rate-cont">{{ item.content }}</div>
					<!-- 属性 -->
					<div class="rate-attr">
						<span class="time">{{ formatSeconds }}</span>
						<span class="sku">{{ item.style }}</span></div>
				</div>
			</div>
		</div>
		<yd-tabbar class="footer">
			<yd-tabbar-item title="客服" link="#">
				<i class="iconfont icon-kefu" slot="icon"></i>
			</yd-tabbar-item>
			<yd-tabbar-item title="店铺" link="../shop">
				<i class="iconfont icon-dianpu" slot="icon"></i>
			</yd-tabbar-item>
			<yd-tabbar-item title="收藏" link="#">
				<yd-icon name="star-outline" slot="icon" size="0.54rem"></yd-icon>
			</yd-tabbar-item>
			<div class="buy-cart" @click="choice">加入购物车</div>
			<div class="buy-now">立即购买</div></yd-tabbar>
		<!-- <yd-button size="large" type="warning" @click.native="show2=t rue">下部弹出</yd-button> -->
		<yd-popup v-model="show2" position="bottom" height="60%">
			<section id="J_GoodsSku" class="goods-sku" style="visibility: visible;">
				<div class="content">
					<div class="sku-title">
						<div class="sku-title-img">
							<!-- <img :v-if="item.index=this.skuimgindex" :src="item.img" alt=""> -->
							<!-- <img v-if="skuimgindex" v-if="skuimgindex==1" :v-if="item.index==1" :src="item.img" alt=""> -->
							<!-- <img v-if="skuimgindex" v-for="item in goods.skuInfo.skus" :v-if="" :src="item.index===1 ? item.img": alt=""> -->
							<!-- <img :src=[detailimg ? detailimg : (goods.skuInfo.skus[0].img)]> -->
							<img :src=detailimg></div>
						<div class="sku-title-desc">
							<span class="sku-title-text">{{ goods.itemInfo.title }}</span>
							<span class="sku-title-price">
								<span class="price">¥{{ goods.itemInfo.lowNowPrice }}</span>
								<span class="sku-stock">库存
									<span class="stock">{{ stock==0?this.goods.skuInfo.totalStock:stock }}</span>件</span></span>
							<span class="sku-title-addon">请选择颜色、尺码</span></div>
						<span class="close" @click="show2 = false">╳</span></div>
					<div class="scroll">
						<div class="sku-list">
							<dl class="style clearfix">
								<dt>颜色：</dt>
								<dd>
									<ol class="J_StyleList style-list clearfix" style="">
										<!-- <li v-if="skustyle" v-for="item in skustyle" @click="getskuimgindex(item.index)" title="8113白色">{{ item.name }}</li> -->
										<li v-if="skustyle" v-for="(item,index) in skustyle" @click="gets(item.index,index)" :class="{classb:activeindex1 == index}">{{ item.name }}</li></ol>
								</dd>
							</dl>
							<dl class="size clearfix">
								<dt>尺码：</dt>
								<dd>
									<ol class="J_SizeList size-list clearfix" style="">
										<li v-if="skusize" v-for="(item,index) in skusize" @click="active(item,item.sizeId,index)" :class="{classb:activeindex2 == index}">{{ item.name }}</li></ol>
								</dd>
							</dl>
						</div>
					</div>
					<div class="action">
						<p class="title">数量:</p>
						<div class="num">
							<yd-spinner v-model="spinner1"></yd-spinner>
							<span>[model: spinner1 = {{spinner1}}]</span>
						</div>
						<span class="confirm" @click="addcart">确定</span></div>
				</div>
			</section>
		</yd-popup>
	</div>
	<div class="nodata" @click="back" v-if="notdata==1">
		<p>数据正在建设中。。。</p>
		<div class="back">返回首页</div>
	</div>
	</div>
</template>

<script>
		export default {
				data() {
						return {
								list: [
										{img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
										{img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
										{img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
										{img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
										{img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
										{img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
								],
								iid:'',
								goods: '',
								topimgs:'',
								detailimgs1:'',
								detailimgs2:'',
								detailimgs3:'',
								skustyle:'',
								skusize:'',
								skuimgindex: 0,
								skusizeindex: 0,
								promotionslist:'',
								show2: false,
								spinner1: 0,
								activeindex1: 0,
								activeindex2: 0,
								notdata:0
						}
				},
				methods:{
					 choice(){
						//弹出选项框
								this.show2 = true
						},
						addcart(){
								// alert("hhh")

								// this.$http.post('47.90.203.87:8088/addcart/', {
								//      goodsid: this.goodsid,
								// })
								// .then(function (response) {
								//  console.log(response);
								// })
								// .catch(function (error) {
								//  console.log(error);
								// });
								
								//获取sku  参数
								let stockid = ''
								let stockdetail =this.goods.skuInfo.skus
								//循环取出符合条件的数据 
								for (var i = 0; i < stockdetail.length; i++) {
									if (this.skuimgindex==0) {this.skuimgindex=1}
									if (this.skusizeindex==0) {this.skusizeindex=100}
									if (stockdetail[i].styleId==this.skuimgindex&&stockdetail[i].sizeId==this.skusizeindex) {
										alert(i)
										stockid = stockdetail[i].stockId
									}
								}
								if (this.goods.skuInfo.skus[0].stockId) {}
								let params = new URLSearchParams()
								 // params.append('name', 'hello jdmc你好');
								 params.append('userid', 1007)
								 params.append('shopname', '胖丫的店')
								 params.append('iid', this.iid)
								 params.append('stockid',stockid)
								 params.append('sum', this.spinner1)
								 params.append('checked', false)
								this.$http({
									method: 'post',
									url: 'http://localhost:8088/api/addcart/',
									data:params
									// data: {iid: this.iid, stockid: stockid, sum: this.spinner1}//此种方式会发送两次请求
									//并且数据在里request playload里而不在formdata里
								}).then(function (response) {
									console.log(response);
								}).catch(function (error) {
									console.log(error);
								})
						},
						gets(itemindex,index){
							this.skuimgindex = itemindex;
							this.activeindex1=index;
						},
						active: function(item,itemindex,index){
							this.skusizeindex = itemindex;
							this.activeindex2=index;
							console.log(item)
						},
						back(){
							//编程式路由跳转
								this.$router.push('/');
						}
				},
				computed: {
				// 计算属性的 getter
				wrapperw: function () {
					// `this` 指向 vm 实例
					return "width:" + this.list.length*100+"%";
				},
				itemw: function(){
					return "width:" + 100/this.list.length*0.82+"%"; 
				},
				//秒数时间戳转具体  日期
				formatSeconds: function(){
						let date = new Date((this.goods.rate.list[0].created)*1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
						let  Y = date.getFullYear() + '-';
						let  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
						let  D = date.getDate() + ' ';
						let  h = date.getHours() + ':';
						let  m = date.getMinutes() + ':';
						let  s = date.getSeconds();
						// return Y+M+D+h+m+s;
						 return Y+M+D;
				},
				detailimg: function(){
					//循环找一个符合条件的东西
					for (var i = 0; i < this.goods.skuInfo.skus.length; i++) {
						if (this.goods.skuInfo.skus[i].styleId==this.skuimgindex) {
							return this.goods.skuInfo.skus[i].img
						}
						// else{
						//  return this.goods.skuInfo.skus[0].img
						// } 
					}
					return this.goods.skuInfo.skus[0].img
				},
				stock: function(){
					if (this.skusizeindex==0) {
						let sum1 = 0
						for (var i = 0; i < this.goods.skuInfo.skus.length; i++) {
							if (this.goods.skuInfo.skus[i].styleId==this.skuimgindex) {
								sum1 += this.goods.skuInfo.skus[i].stock
							}
							// else{
							//  return this.goods.skuInfo.skus[0].img
							// } 
						}
						return sum1
					}
					else if(this.skusizeindex!=0){
						let sum2 = 0
						for (var i = 0; i < this.goods.skuInfo.skus.length; i++) {
							if (this.goods.skuInfo.skus[i].styleId==this.skuimgindex) {
								sum2 = this.goods.skuInfo.skus[i].stock
							}
						}
						return sum2
					}
					else{
						let sum3
						for (var i = 0; i < this.goods.skuInfo.skus.length; i++) {
						 if (this.goods.skuInfo.skus[i].sizeId==this.skusizeindex) {
								sum3 = this.goods.skuInfo.skus[i].stock
							}
						}
						return sum3
					}
				}
			},
			 //使用钩子函数在加载页面时加载数据
				created: function () {
						// this.iid = this.$route.params.iid;
						// console.log(this.$route.params)
						// // `this` 指向 vm 实例

						// this.$http.get("47.90.203.87:8088/detail/"+this.iid)
						//     .then((response)=> {
						//         console.log(response.data)
						//         //this.goods=response.data.result.skuInfo;
						//         // response.data.replace(/\\/," ");
						//         // response.data.trim('"');
						//         // let goodsinfo = JSON.stringify(response.data);
						//         this.goods=response.data.result
						//         this.topimgs=response.data.result.itemInfo.topImages
						//         this.detailimgs1=response.data.result.detailInfo.detailImage[0].list
						//         this.promotions = response.data.result.promotions.list
						//     })
						//     .catch((error)=> {
						//         console.log(error)
						//     });
				},
				mounted: function(){
						this.iid = this.$route.params.iid;
						console.log(this.$route.params)
						// `this` 指向 vm 实例

						this.$http.get("http://localhost:8088/api/detail/"+this.iid)
								.then((response)=> {
									if (response.data.result == null) {
										this.notdata=1
									}
										console.log(response.data)
										this.goods=response.data.result
										this.topimgs=this.goods.itemInfo.topImages
										this.skustyle = this.goods.skuInfo.props[0].list
										this.skusize = this.goods.skuInfo.props[1].list
										this.detailimgs1=this.goods.detailInfo.detailImage[0].list
										if (this.goods.detailInfo.detailImage[1].list == null ) {
												this.detailimgs2 = null
										}
										else if (this.goods.detailInfo.detailImage[2].list == null) {

												this.detailimgs2=this.goods.detailInfo.detailImage[1].list
												this.detailimgs3 = null
										}
										else{
												this.detailimgs3=this.goods.detailInfo.detailImage[2].list
										}
										this.promotions = this.goods.promotions.list
										console.log(this.skuinfo)
								})
								.catch((error)=> {
										console.log(error)
								});
				}
		}
</script>

<style scoped>
		.flex{
				display: flex;
				justify-content: space-between;
		}
		.tl{
				text-align: left;
		}
		.tr{
				float: right;
		}
		.primary_swiper{
				width: 100%;
				overflow:  hidden;
		}
		.wrapper{
				position:  relative;
				display:  flex;
				left: -249%;
		}
		.item{
				width: 16%;
				padding-right: 10px;
		}
		.item img {
				width: 100%;
		}
		
		.promotion_list{
				overflow: auto;
		}
		.promotion_item{
				background: url(https://s10.mogucdn.com/mlcdn/c45406/170712_2kibif5eadh33ii7ik7bi0i2lae25_180x88.png) no-repeat;
				background-size: 100%;
				width: 1.9rem;
				height: 1.2rem;
				margin-right: 0.2rem;
				flex-shrink: 0;
		}
		.promotion_text {
				background-size: 100%;
				width: 1.5rem;
				height: 1.2rem;
				padding-top: 0.15rem;
				-ms-flex-negative: 0;
				flex-shrink: 0;
				text-align: center;
				color: #fff;
		}
		a.yd-grids-item {
				height: auto !important;
				padding: .03rem !important;
				border: none !important;
		}
		.yd-grids-item:after{
				border:none !important;
		}
		.yd-grids-4{
				padding-bottom: 40px !important;
		}
		.yd-grids-4:before{
				border: none !important;
		}
		.yd-grids-4 .yd-grids-item:before{
				border: none !important;
		}
		.yd-grids-4 .yd-grids-item:after{
				border: none !important;
		}
		.yd-slider-pagination{
				bottom: .35rem !important;
		}
		.parameter-wrap {
				background: #fff;
		}
		.size-list tr {
				border-bottom: 1px solid red;
		}
		.parameter-wrap .size-list td:first-child {
				width: 100px;
		}
		.size-list td {
				font-size: .27rem;
				font-weight: 400;
				line-height: 38px;
				text-align: left;
				color: #727272;
		}
		table {
				border-collapse: collapse;
				border-spacing: 0;
		}
		.param-list {
				font-size: .27rem;
		}
		.param-list li {
				display: flex;
				line-height: 40px;
				border-bottom: 1px solid red;
		}
		.param-name {
				display: inline-block;
				width: 100px;
				text-align: left;
				color: #727272;
		}
		.param-info {
				flex: 1;
				text-align: left;
				color: #eb4868;
		}
		.pic-list img{
				width: 100%
		}
		.rates-title{
				display: block;
				width: 100%;
				text-align: left;
		}
		span.user-info {
				width: 100%;
				display: block;
				line-height: 1rem;
				text-align:  left; 
				overflow: hidden;
		}

		img.avatar {
				display:  inline-block;
				width: 1.2rem;
				height: 1.2rem;
				border: 1px solid #efefef;
				-webkit-border-radius: 50%;
				-moz-border-radius: 50%;
				border-radius: 50%;
				float: left;
		}

		span.name {
				display:  inline-block;
				margin-left: .2rem;
				color: #424242;
				font-size: .27rem;
				vertical-align: middle;
		}


		.buy-cart {
				width: 1.8rem;
				font-size: .3rem;
				background: #ffe60c;
				height: 1.2rem;
				line-height: 1.2rem;
				color:  black;
		}

		.buy-now {
				width: 1.8rem;
				font-size: .3rem;
				height: 1.2rem;
				line-height: 1.2rem;
				background: #fa3a7c;
				color: #fff;
		}
		footer.yd-tabbar.tabbbar-top-line-color{
				padding: 0 !important;
		}
		span.new {
				font-size: .4rem;
				color: #f69;
		}

		span.old {
				color: #999;
				font-size: .25rem;
				text-decoration: line-through;
		}

		span.discount {
				margin: 0 0 0 .2rem;
				padding: .05rem .15rem;
				color: #fff;
				font-size: .2rem;
				border-radius: .2rem;
				background: #f69;
		}

		span.info_item {
				font-size:  .27rem;
				color: #999;
		}

		.info_other {
				line-height: .5rem;
				border-bottom: #ddd solid 1px;
		}

		.detail {
				padding: 0 .2rem;
						margin-bottom: 2rem;
		}

		.services {
				font-size: .3rem;
		}
		.shop_collect.fr {
				padding: .05rem .25rem;
				background: #f69;
				border-radius: .2rem;
				font-size: .27rem;
				color: #fff;
				float:  right;
		}

		.yd-flexbox-item.info.yd-flexbox-item-center {
				display:  flex;
				justify-content: space-around;
		}

		.shop-evaluate {
				padding-left: .5rem;
				border-left: #ddd solid 1px;
		}

		.point {
				padding: .2rem 0px;
		}

		.enter {
				display:  inline-block;
				font-size:  .3rem;
				padding: .1rem .8rem;
				border-radius: .5rem;
				background: #cacaca;
				margin-bottom: .4rem;
		}
		.footer{
				width: 100%;
				position: fixed;
				left: 0;
				bottom: 0;
				z-index: 999;
		}
		.tabbbar-top-line-color{
				 padding: 0 !important;
		}
		p.tl{
				font-size: .3rem !important;
		}
		.sku-title-img {
		float:  left;
		width: 2.2rem;
		height: 3.8rem;
}

.sku-title-desc {
		display: inline-block;
		width: 4.2rem;
		font-size: .3rem;
		margin-left: .2rem;
		color: #999;
		font-size: .25rem;
}

.sku-title {
		text-align:  left;
		padding: .2rem;
		overflow:  hidden;
}

span.close {
		position: absolute;
		font-size: .37rem;
		color: #dfdfdf;
		font-family: serif;
}

.sku-title-img img {
		width:  100%;
		height:  auto;
}

span.sku-title-text {
		display:  block;
		font-size: .3rem;
		color: #5e5e5e;
}

span.sku-title-price {
		display:  block;
		margin-top: .3rem;
}

span.price {
		color: #f69;
		font-size: .4rem;
}
dl.style.clearfix {
		text-align:  left;
		margin-left: .2rem;
}

ol.J_StyleList.style-list.clearfix li {
		display:  inline-block;
		color:  #333;
		padding: .1rem .3rem;
		margin-top: .2rem;
		margin-right: .2rem;
		text-align:  center;
		font-size: .3rem;
		background: #f8f8f8;
}


dl.size.clearfix {
		text-align:  left;
		margin-left: .2rem;
}

ol.J_SizeList.size-list.clearfix li {
		display: inline-block;
		color: #333;
		padding: .1rem .3rem;
		margin-top: .2rem;
		margin-right: .2rem;
		text-align: center;
		font-size: .3rem;
		background: #f8f8f8;
}
p.title,.num {
		text-align: left;
		margin-left: .2rem;
}

span.confirm {
		font-size: .4rem;
		text-align: center;
		color: #fff;
		background-color: #f69;
		display: block;
		height: 1rem;
		line-height: 1rem;
}
.iconfont{
	font-size: .5rem !important;
}
.classb{
	background: #f69 !important;
	color: #fff !important;
}
.back{
	width: 80%;
		height: 1rem;
		line-height: 1rem;
		font-size: .5rem;
		margin: 0 auto;
		color: #fff;
		background: #ff1877;
		margin-top: .3rem;
		border-radius: 3px;
}
</style>
