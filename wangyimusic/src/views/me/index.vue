<template>
  <div class='box'>
    <Head-other title="个人中心" :left="true"/>
    <Uploadimg></Uploadimg>

  </div>
</template>

<script>
import Uploadimg from "./Uploadimg";

export default {
  components:{
    Uploadimg
  }
}
</script>

<style lang='scss' scoped>

</style>