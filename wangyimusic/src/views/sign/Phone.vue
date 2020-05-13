<template>
  <van-tab title="验证码登录">
    <van-field v-model="mobile"
               name="mobile"
               label="手机号"
               placeholder="请输入手机号" />
    <van-field v-model="sms"
               center
               clearable
               label="短信验证码"
               placeholder="请输入短信验证码">
      <template #button>
        <van-button @click="sendSms"
                    size="small"
                    type="primary">发送验证码</van-button>
      </template>
    </van-field>
    <van-button round
                block
                type="warning"
                @click="checkSms">
      验证登录
    </van-button>
  </van-tab>
</template>

<script>
export default {
  data() {
    return {
      sms: "",
      mobile: ""
    };
  },
  methods: {
    sendSms() {
      this.$axios
        .get("/yun/captcha/sent", {
          params: {
            phone: this.mobile
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    checkSms(val) {
      this.$axios
        .get("/yun/captcha/verify", {
          params: {
            phone: this.mobile,
            captcha: this.sms
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.$router.push({ name: "main" });
          }
        });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>