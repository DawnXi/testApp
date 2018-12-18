<template>

    <div>
        <p>hgvhvhvhggvhfvhgbc</p>
        <h2>{{msg}}</h2>

        <hr/>

        <p>{{$store.state.num}}</p>
        <div>

    <button @click="$store.commit('jia')">+</button>

    <button @click="$store.commit('jian')">-</button>

</div>

    </div>



</template>

<script>
    export default{
        data(){
            return{
                msg:'足球比赛',
            }
        },
    }

</script>