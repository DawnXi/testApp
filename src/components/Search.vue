<template>
	<div class="search">
		<div v-if="list[0]">
			<v-Filter></v-Filter>	
			<yd-list theme="2">
	            <yd-list-item v-for="item, key in list" :key="key" type="link" :href="'./detail/'+item.iid">
	                <img slot="img" :src="item.main_img">
	                <span slot="title">{{item.title}}</span>
	                <yd-list-other slot="other">
	                    <div>
	                        <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
	                    </div>
	                </yd-list-other>
	            </yd-list-item>
	         </yd-list>
		</div>
		<div class="nodata" @click="back" v-if="nodata==1"></div>
		    <p>没有找到相关数据。。。</p>
		    <div class="back" @click="back">返回首页</div>
	   </div>
	</div>
	
</template>

<script>
//引入组件
// import Footer from 'components/Footer';//报错  找不到组件
import Filter from '@/components/Filter'
export default {
  name: 'Search',
  data () {
    return {
      list:'',
      nodata:0,
      wd:''
    }
  },
  components:{
  	'v-Filter':Filter
  },
  methods:{
  	back(){
  		//编程式路由跳转
        this.$router.push('/');
  	}
  },
  created:function(){
 //  	alert(this.list)
  	this.wd = this.$root.wd
  	let params = new URLSearchParams()
	params.append('wd', this.wd)
	// this.$http({
	//   method: 'post',
	//   url: 'http://localhost:8088/api/search/',
	//   data:params
	//   //data: {wd: value}这种方法会发送两种请求
	// }).then(function (response) {//tips 不用箭头函数会导致this指针混乱  找不到组件下的变量
	// 	alert(response.data)
	// 	this.list = response.data
	// 	alert(this.list)
	// }).catch(function (error) {
	// 	//this.nodata==1
	//   console.log(error);
	// })
	this.$http({
	  method: 'post',
	  url: 'http://localhost:8088/api/search/',
	  data:params
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
  }
}
</script>

<style scoped>
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
