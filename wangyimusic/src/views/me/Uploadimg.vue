<template>
  <div>
    <input type="file"
           v-show="false"
           ref="loadImg"
           name="avatar"
           @change="changePic">
    <img :src="pic"
         alt="用户头像"
         @click="handleClick"
         class="avatar">
    <button @click="upLoadPic">上传</button>
  </div>
</template>

<script>
import defaultImg from "@/assets/logo.png";
import {
    baseURL
} from "@/utils/axios"
export default {
  data() {
    return {
      pic: defaultImg
    };
  },
  mounted() {
    if(localStorage.user){
      let lo = JSON.parse(localStorage.user)
      let se = JSON.parse(sessionStorage.user)
      if( lo.mobile == se.mobile){
        this.pic = lo.avatar
      }else{
        this.getPic();
      }
    }else{
        this.getPic();
    }
  },
  methods: {
    handleClick() { // 点击图片触发 input
      this.$refs.loadImg.click();
    },
    upLoadPic() { // 上传头像
      let file = this.$refs.loadImg.files[0];
      let data = new FormData();
      data.append("avatar", file);
      this.$axios({
        url: "/vue/uploadimg",
        method: "POST",
        data
      }).then(res => {
        this.pic = res.data.path.replace(/public/,baseURL);
        console.log(res);
        let user = {
          mobile: res.data.mobile,
          avatar: this.pic
        }
        localStorage.user = JSON.stringify(user)
      });
    },
    changePic() { // 本地预览头像
      let file = this.$refs.loadImg.files[0];
      let that = this;
      let fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = function(e) {
        that.pic = e.target.result;
      };
    },
    getPic(){
      this.$axios.get("/vue/getavatar").then(res=>{
        console.log(res);
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.avatar{
  width: 100px;
  height: 100px;
}
</style>