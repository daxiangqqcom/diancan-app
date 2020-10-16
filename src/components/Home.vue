<template>
<div>
    <h1>Home</h1>
    <button  @click="goToMenu" class="btn btn-success">Let's order</button>
</div>
</template>
<script>
export default {

    methods:{
        goToMenu(){
            // 1.跳转到上一次浏览的页面
            // this.$router.go(-1)
            // 2.指定跳转的地址
            // this.$router.replace('/menu')
            // 3.指定跳转到路由的名字下
            // this.$router.replace({name:'menuLink'})
            // 4.通过push跳转
            this.$router.push('/menu')
        }
    }
    
}
</script>
