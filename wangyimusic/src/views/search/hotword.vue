<template>
  <div class='wrap'>
    <h2>热搜榜</h2>
    <ul>
      <li v-for="(item,i) in hotword"
          :key="i"
          class="clearfix"
          @click="chooseKey">
        <i>{{i + 1 }}</i>
        <div>
          <h4>{{item.searchWord}}</h4>
          <p class="overhidden">{{item.content}}</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotword: []
    };
  },
  methods:{
    chooseKey(e) {
      let keyword = e.currentTarget.querySelector("h4").innerHTML;
      this.$router.push({
        name:"detail",
        params:{
          keyword
        }
      })
      
    }
  },
  mounted() {
    this.$axios.get("/yun/search/hot/detail").then(res => {
      this.hotword = res.data.data;
    });
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  height: 90vh;
  overflow: scroll;
  h2 {
    padding: 10px 50px 0px;
    text-align: left;
    font: 900 18px/22px "KaiTi";
    color: rgb(133, 68, 68);
  }
  ul {
    padding: 0px 50px 50px;
  }
  li {
    height: 40px;
    text-align: left;
    padding-top: 10px;
    i {
      width: 30px;
      line-height: 40px;
      font-size: 18px;
      display: block;
      float: left;
    }
    div {
      width: 60vw;
      float: left;
      h4{
        color: black;
        font-weight: 700;
      }
      p{
        color: rgb(109, 109, 109);
      }
    }
  }
}
</style>