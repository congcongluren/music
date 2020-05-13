<template>
  <div class='box'>
    <HeadOther :title="$route.params.title"
               :left="true"></HeadOther>
    <button @click="action">开始</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script>
import bus from "@/utils/bus";
export default {
  data() {
    return {
      musicId: "",
      src: ""
    };
  },

  methods: {
    action() {
      bus.$emit("action");
    },
    stop() {
      bus.$emit("stop");
    },
    seturl() {
      bus.$emit("seturl", this.src);
    }
  },
  mounted() {
    this.musicId = this.$route.params.musicId;
    this.$axios
      .get("/yun/song/url", {
        params: {
          id: this.musicId
        }
      })
      .then(res => {
        this.src = res.data.data[0].url;
        console.log(this.src);
        this.seturl();
      });
  },
  watch: {
    $route: {
      handler() {
        this.musicId = this.$route.params.musicId;
        this.$axios
          .get("/yun/song/url", {
            params: {
              id: this.musicId
            }
          })
          .then(res => {
            console.log(res);

            this.src = res.data.data[0].url;
            this.seturl();
          });
      },
      deep: true
    }
  }
};
</script>

<style lang='scss' scoped>
.au {
  width: 300px;
}
</style>