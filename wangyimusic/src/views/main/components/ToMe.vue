<template>
  <van-overlay :show="show"
               @click="show = false">
    <div class="wrapper"
         @click.stop>
      <div class="top clearfix">
        <img src="@/assets/logo.png"
             alt="头像"
             @click="toWhere">
        <p v-if="user.islogin">
          <span>欢迎你 {{user.username}}</span>
          <br>
          
        </p>
        <p v-else>您还没有登录，请先登录 <br /> 点击头像进入登录界面</p>
      </div>
      <div class="center"></div>
    </div>
  </van-overlay>
</template>

<script>
import { forUser } from "@/store/modelMixins";

export default {
  mixins:[forUser],
  data() {
    return {
      show: false
    };
  },
  methods: {
    toWhere() {
      if (this.user.islogin) {
        this.$router.push({ name: "me" });
      } else {
        this.$router.push({ name: "sign" });
      }
    }
  },
  mounted() {
      this.reqUser();
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
  width: 80vw;
  height: 100vh;
  background: rgb(91, 91, 92);
  position: relative;
  .top {
    width: 100%;
    height: 30%;
    overflow: hidden;
    p {
      color: rgb(226, 105, 105);
      font-size: 15px;
    }
    img {
      display: block;
      width: 90px;
      height: 90px;
      margin: 40px auto 10px;
      border-radius: 999px;
      background: #fff;
    }
  }
  .center {
    width: 100%;
    height: 70%;
    position: absolute;
    bottom: 0;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    background: #fff;
  }
}
// 设置遮罩层
.van-overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>