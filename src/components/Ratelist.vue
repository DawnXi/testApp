<template>
	<div class="ratelist">
		<div class="rates-list plr30" v-if='ratelist' v-for="item in ratelist">
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
</template>

<script>
export default {
  name: 'Ratelist',
  data () {
    return {
      ratelist: '',
      iid:''   
    }
  },
  mounted(){
  	this.iid = this.$route.params.iid;
    // `this` 指向 vm 实例
    alert("hhh")
    this.$http.get("http://localhost:8088/api/ratelist/"+this.iid)
        .then((response)=> {
            this.ratelist=response.data.data.list
        })
        .catch((error)=> {
            console.log(error)
        });
  }
}
</script>

<style scoped>
</style>
