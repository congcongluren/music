<template>
  <div class='box'>
    <!-- 头部 -->
    <Head-other :left="true"
                title="登录&&注册"/>
    <!-- tab bar -->
    <van-tabs v-model="active"
              color="#0f0"
              title-active-color="#0f0">
      <Login></Login>
      <Register></Register>
      <Phone></Phone>
    </van-tabs>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";
import Phone from "./Phone";

export default {
  data(){
    return {
      active:0
    }
  },
  components: {
    Login,
    Register,
    Phone
  }
};
</script>

<style lang='scss' scoped>
</style>