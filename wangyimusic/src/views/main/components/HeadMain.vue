<template>
  <div>
    <van-nav-bar left-arrow>
      <template #left>
        <div>
          <span class="iconfont" @click="changeShow">&#xe501;</span>
        </div>
      </template>
      <template #title>
        <div class="head-link">
          <router-link :to="{name:'recommend'}">推荐</router-link>
          <router-link :to="{name:'hot'}">热歌榜</router-link>
        </div>
      </template>
      <template #right>
        <span class="iconfont search" @click="toSearch">&#xe60b;</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods:{
    toSearch(){
      this.$router.push({
        name:"hotword"
      })
    },
    changeShow(){
      this.$emit("showOverlay")
    }
  }
};
</script>

<style lang='scss' scoped>
.head-link{
  display: flex;
  width: 50vw;
  justify-content: space-around;
}
.iconfont {
  font-size: 28px;
  // display: block;
  // margin: 6px;
}
.search {
  font-size: 20px;
  display: block;
  margin: 6px;
}
</style>