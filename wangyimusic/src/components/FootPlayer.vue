<template>
  <div class="foot" :v-show="show">
    <h3>{{player.name}}</h3>
    <a href="javascript:;" @click="play" class="iconfont play">
      {{ player.play ? '&#xe6ad;' : '&#xe615;'}}
    </a>
  </div>
</template>

<script>

import { forPlayer } from "@/store/modelMixins";

export default {
  mixins:[forPlayer],
  data(){
    return {
      show: true
    }
  },
  mounted(){
    
  },
  methods:{
  }
}
</script>

<style lang='scss' scoped>
.foot{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 10vh;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgb(97, 97, 97); /* no*/
  h3{
    font: 18px/20px '黑体' 500;
  }
  .play{
    font-size: 30px;
  }
}
</style>