<template>
  <div class="wrap">
    <Head-search :left="true"
                 :right="true"
                 v-on:keychange="wordchange"
                 v-on:wordblur="wordblur"
                 v-on:wordfocus="wordfocus"
                 ref="headsearch" />

    <div class="search-result"
         v-show="show">
      <h3>搜索：“{{ key }}” 结果为</h3>
      <ul class="list">
        <li v-for="(item, i) in songs"
            :key="i"
            @click="choose(item.keyword)">
          <p class="overhidden">
            <i class="iconfont icon">&#xe60b;</i>
            <span>{{item.keyword}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeadSearch from "./HeadSearch";
export default {
  components: {
    HeadSearch
  },
  data() {
    return {
      key: "",
      defaultkey: "",
      songs: [],
      show: false,
      t: Object,
      type: 0 // 0 不显示  1 显式并且搜索key  2 显式，且key没变
    };
  },
  methods: {
    wordchange(word) {
      // 判断子组件搜索的值改变 ，判断是否为空，请求数据
      this.type = 0;
      this.songs = [];
      this.key = word;
      clearTimeout(this.t);
      this.t = setTimeout(() => {
        this.searchKey();
      }, 1000);
    },
    wordblur(word) {
      // 子组件失去焦点
      clearTimeout(this.t);
      setTimeout(() => {
        // 延迟是为了给点击歌曲留出时间
        this.type = 0;
      }, 100);
    },
    wordfocus(word) {
      if (this.key == word) {
        this.type = 2;
      } else {
        this.type = 1;
      }
    },
    searchKey() {
      // 搜索key的值 然后改变songs
      if (this.key == "") {
        this.key = this.defaultkey;
      }

      this.$axios
        .get("/yun/search/suggest", {
          params: {
            keywords: this.key,
            type: "mobile"
          }
        })
        .then(res => {
          this.songs = res.data.result.allMatch; // 赋值然后让页面自动渲染
          this.type = 2;
        });
    },
    choose(keyword) {
      this.$router.push({
        name: "detail",
        params: {
          keyword
        }
      });
    }
  },
  watch: {
    type(val) {
      switch (val) {
        case 0:
          this.show = false;
          break;
        case 1:
          this.searchKey();
          this.show = true;
          break;
        case 2:
          this.show = true;
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    // 设置搜索默认的值 传递给子组件
    this.$axios.get("/yun/search/default").then(res => {
      this.defaultkey = res.data.data.showKeyword.replace(
        /大家都在搜 | 最近很火哦/,
        ""
      );
      this.key = this.defaultkey;
      this.$refs.headsearch.defaultword = res.data.data.showKeyword;
    });
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  position: relative;
}
.search-result {
  position: absolute;
  z-index: 5;
  background: #fff;
  top: 70px;
  left: 50px;
  padding: 10px;
  width: 70vw;
  box-shadow: 1px 1px 5px #888888;
  h3 {
    text-align: left;
    font-size: 16px;
    color: rgb(75, 114, 114);
  }
  .list {
    li {
      padding-top: 5px;
      border-bottom: 1px solid rgb(228, 224, 224); /* no */
      text-align: left;
      font-size: 16px;
      line-height: 35px;
      color: rgb(93, 92, 92);
      span {
        padding-left: 10px;
      }
    }
  }
  .icon {
    font-size: 14px;
    color: rgb(197, 192, 192);
  }
}
</style>