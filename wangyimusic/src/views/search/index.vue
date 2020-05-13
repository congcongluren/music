<template>
  <div class='box'>
    <Search v-on:hotWordShow="changeshow"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from "./components/Search";

export default {
  components:{
    Search
  },
  methods:{
    changeshow(value){
      this.hotWordShow = value
    }
  }
};
</script>

<style lang='scss' scoped>

</style>