<template>
  <div>
    <van-nav-bar :title="title">
      <template #left>
        <van-icon name="arrow-left"
                  size="38"
                  v-if="left"
                  @click="leftclick" />
      </template>
      <template #right>
        <van-icon name="search"
                  size="38"
                  v-if="right" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:"默认标题"
    },
    left:{
      type:Boolean,
      default:false
    },
    right:{
      type:Boolean,
      default:false
    },
  },
  methods:{
    leftclick(){
      this.left? this.$router.go(-1):""
    }
  }
};
</script>

<style lang='scss' scoped>
</style>