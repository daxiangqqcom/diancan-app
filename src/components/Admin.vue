<template>
    <h1>Admin</h1>
</template>

<script>
    export default {
        data(){
            return {
                name: "henry"
            }
        },
        beforeRouteEnter:(to,from,next)=> {
            // alert("hello "+this.name);
            // next();

            next(vm=>{
                alert('Hello '+vm.name);
            })
        },
        beforeRouteLeave(to,from,next){
            if(confirm("确认离开吗？")==true){
                next();
            } else {
                next(false);
            }
        }
    }
</script>