<template>
  <van-tab title="注册">
    <van-form @submit="registerSubmit">
      <van-field v-model="register.mobile"
                 name="mobile"
                 label="手机号"
                 placeholder="手机号"
                 :rules="[{ pattern:mobilPattern, message: '手机号码填写不正确' }]" />
      <van-field v-model="register.username"
                 name="username"
                 label="用户名"
                 placeholder="用户名"
                 :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="register.password"
                 type="password"
                 name="password"
                 label="密码"
                 placeholder="密码"
                 :rules="[{ pattern:passwordPattern, message: '请填写正确密码,8位以上任意字符' }]" />
      <van-field v-model="register.dbpwd"
                 type="password"
                 name="dbpwd"
                 label="确认密码"
                 placeholder="确认密码"
                 :rules="[{ required: true, message: '请填写确认密码' },{ validator: dbpwd , message: '请确认密码' },]" />
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="primary"
                    native-type="submit">
          马上注册
        </van-button>
      </div>
    </van-form>
  </van-tab>
</template>

<script>
export default {
  data() {
    return {
      register: {},
      mobilPattern: /^1[3456789]\d{9}$/,
      passwordPattern: /.{8,}/ 
    };
  },
  methods: {
    registerSubmit() {
      this.$axios.post("/vue/register", this.register).then(res => {
        if (res.data.type === 1) {
          this.$router.push({ name: "main" });
        }
      });
    },
    dbpwd() {
      // 确认密码验证规则
      return this.register.password === this.register.dbpwd;
    }
  }
};
</script>

<style lang='scss' scoped>
</style>