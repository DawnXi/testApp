<template>
	<div class="footer">
		<yd-tabbar>
	        <yd-tabbar-item title="首页" link="/">
	            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
	        </yd-tabbar-item>
	        <yd-tabbar-item title="分类" link="./maincategory">
	            <i class="iconfont icon-leimupinleifenleileibie" slot="icon" size="0.8rem"></i>
	        </yd-tabbar-item>
	        <yd-tabbar-item title="购物车" link="./cart" dot>
	            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
	        </yd-tabbar-item>
	        <yd-tabbar-item title="我" link="./mycenter" active>
	            <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
	            <yd-badge slot="badge" type="danger">2</yd-badge>
	        </yd-tabbar-item>
	    </yd-tabbar>
	</div>
</template>

<script>
export default {
	// name: 'Footer'
}
</script>

<style scoped>
.iconfont{
        font-size: .45rem !important;
    }
</style>
