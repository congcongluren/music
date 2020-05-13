<template>
  <div class='box'>
    <Head-main v-on:showOverlay="showOverlay"></Head-main>
    <router-view></router-view>
    <ToMe ref="toMe"></ToMe>
  </div>
</template>

<script>

import ToMe from "./components/ToMe";
import HeadMain from "./components/HeadMain";

export default {
  components:{
    ToMe,
    HeadMain
  },
  methods: {
    showOverlay() {
      this.$refs.toMe.show = true
    }
  }
};
</script>

<style lang='scss' scoped>
.mine {
  width: 70vw;
  height: 100vh;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

</style>