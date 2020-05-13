<template>
  <div class="head-search">
    <van-nav-bar>
      <template #left>
        <span class="iconfont"
              v-if="left"
              @click="leftOnClick">&#xe505;</span>
      </template>

      <template #right>
        <span class="iconfont"
              @click="rightOnClick">&#xe783;</span>
      </template>
    </van-nav-bar>

    <input type="text"
           class="serch-c"
           v-model="word"
           @focus="wordfocus"
           @blur="wordblur"
           :placeholder="defaultword">
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      word: "",
      defaultword: ""
    };
  },
  methods: {
    leftOnClick() {
      this.left? this.$router.go(-1) : ""
    },
    rightOnClick() {},
    wordfocus(e){ // 得到焦点
         this.$emit("wordfocus",this.word)
    },
    wordblur(){ // 失去焦点
      this.$emit("wordblur",this.word)
    }
  },
  watch:{
    word(){ // 监听word，lazyload防止频繁提交
      this.$emit("keychange",this.word)
    }
  }
};
</script>

<style lang='scss' scoped>
.iconfont {
  font-size: 25px;
}
.serch-c {
  height: 30px;
  font-size: 18px;
  width: 275px;
  // margin-left: -20px;
  padding: 0;
  color: #b8b6b6;
  border: 0;
  border-bottom: 1px solid #b8b6b6; /* no*/
  background: #ffffff;
  position: absolute;
  top: 10px;
  left: 53px;
  z-index: 1;
}
.head-search {
  .van-hairline--bottom::after {
    border: 0;
  }
}
</style>