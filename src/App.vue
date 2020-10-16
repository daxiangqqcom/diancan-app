<template>
  <div id="app">
    <div class="container">
        <app-Header></app-Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    components:{
      appHeader:Header
    }
  }
</script>

<style>

</style>