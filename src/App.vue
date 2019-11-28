<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0
    };
  },
  created() {
    
  },
  methods: {
    change() {
      
    }
  }
};
</script>


<style lang="scss">
</style>
