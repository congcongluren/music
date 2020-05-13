<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
    </div>
    <Foot-player></Foot-player>
    <keep-alive>
      <My-audio v-show="false"></My-audio>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}


a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
