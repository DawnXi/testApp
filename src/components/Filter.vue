<template>
	<div class="filter">
		<div class="top">
			<div class="popular">流行</div>
			<div class="hot">热销</div>
			<div class="price">价格</div>
			<span class="icon"></span>
		</div>
		<div class="filter_item">
			<ul>
				<li class="number">0-30</li>
				<li class="number">30-60</li>
				<li class="number">60以上</li>
			</ul>
			<div class="filter_text">
				<div class="input">
					<input type="text"> -
					<input type="text">
				</div>
				<div class="reset">清空</div>
				<div class="submit">确认</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.top {
    display:  flex;
    justify-content:  space-between;
    /* z-index: 55555555; */
    /* position:  absolute; */
}

.top div {
    padding: 10px 30px;
    font-size: .3rem;
}

.filter_item {
    width: 100%;
    position: absolute;
    top: .9rem;
    left: 0px;
    z-index: 5;
    background: #fff;
    padding: .2rem 0rem;
}

.filter {
    position: relative;
}
.filter_text {
    overflow: hidden;
}
.reset,.submit {
    display: inline-block;
    padding: 5px 20px;
    background: red;
    margin-top: .2rem;
}
.price {
    position:  relative;
}

span.icon {
    width: .5rem;
    height: .5rem;
    background: green;
    /* display: inline-block; */
    /* float:  right; */
    position:  absolute;
    right: 0;
    top: 10px;
}

li.number {
    padding: 5px 30px;
    font-size: .3rem;
    background: #f3f3f3;
}

ul {
    display:  flex;
    justify-content: space-around;
}
.input{
	float: left;
}
input[type="text"] {
    width: 1.7rem;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0.2rem 0 0 0.2rem;
    border-radius: 2px;
    border: 1px solid #e5e5e5;
    overflow: hidden;
    /* padding-left: 0.1rem; */
    /* padding-right: 0.1rem; */
    font-size: .28rem;
    
}

</style>
