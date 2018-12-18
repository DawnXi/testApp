<template>
  <div class="category">
    <yd-grids-group :rows="4" item-height="130px">
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=399"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=89"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=399"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=345"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=321"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=399"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=400"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
        <yd-grids-item>
            <div slot="else" style="text-align: center;">
                <img src="https://picsum.photos/500/500?image=520"  >
                <span>kjbhjbj</span>
            </div>
        </yd-grids-item>
    </yd-grids-group> 


</div>
</template>

<script type="text/babel">
//引入组件
import Footer from '@/components/Footer'
export default {
    data() {
        return {
            input1: 'ydui@qq.com',
            input2: '',
            input3: '',
            result: ''
        }
    },
    methods:{
        check(){
            console.log("hbhjbj")
                // const input = this.$refs.input1;
                // this.result = `{<br />  valid：${input.valid}，<br />  errorMes：'${input.errorMsg}'，<br />  errorCode：'${input.errorCode}'<br />}`;
            }
        },
    components:{
        // 'v-footer': Footer
    }
}
</script>

<style scoped>
    .yd-grids-item img{
        width: 100%;
    }
    </style>
