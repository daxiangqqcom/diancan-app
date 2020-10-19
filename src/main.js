import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}
    // return {selector: '.btn'}

    if(savedPosition){
      return savedPosition
    } else {
      return {x:0,y:0}
    }
  }
})

// // 全局守卫
// router.beforeEach((to,from,next) => {
//   alert("还没登陆,请先登录!");
//   next();
//   console.log(from);
//   console.log(to);

//   // 判断store.gettes.isLogin === false
//   if(to.path == '/login' || to.path == '/register') {
//     next();
//   } else {
//     alert('还没登陆,请先登录!');
//     next('/login');
//   }
// })

router.afterEach((to,from)=>{
  console.log();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
