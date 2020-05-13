<template>
  <div>
    <h1>myaudio</h1>
    <audio :src="player.src"
           controls
           ref="au" />
  </div>
</template>

<script>
import bus from "@/utils/bus";
import { forPlayer } from "../store/modelMixins";

export default {
  mixins: [forPlayer],
  methods: {
    action() {
      if (this.player.ready) {
        this.$refs.au.play();
      }
    },
    stop() {
      this.$refs.au.pause();
    }
  },
  watch: {
    player: {
      deep: true,
      handler(val) {
        let _that = this;
        this.$refs.au.addEventListener("canplay", function() {
          _that.player.ready = true;
        });
        if (val.ready) {
          if (val.play) {
            this.action();
          } else {
            this.stop();
          }
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
</style>