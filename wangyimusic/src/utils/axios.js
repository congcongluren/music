import axios from "axios"
import { Toast } from "vant"
import router from "../router"

let token = "";
const baseURL = "http://localhost:3000";
// axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function showLoading() {
  Toast.clear();
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
    loadingType: "spinner",
    duration: 10000
  });
}

function success(msg) {
  Toast.clear();
  Toast.success({
    message: msg,
    duration: 600
  });
}

function fail(msg) {
  Toast.clear();
  Toast.fail({
    message: msg,
    duration: 600
  });
}

axios.interceptors.request.use(function (config) {
  showLoading();

  token = localStorage.token || "";
  config.headers.token = token;

  return config;
}, function (error) {
  fail("请求失败");
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
  // 判断返回消息的类型 type  1成功 0失败
  // 判断返回的消息 msg  没有返回默认
  if (response.data.type == 1) {
    if (response.data.msg) {
      success(response.data.msg);
    } else {
      success("res success");
    }
  } else {
    if (response.data.msg) {
      fail(response.data.msg);
    } else {
      success("res success");
    }
  }

  // 向 /vue 请求数据的时候，如果返回 code = 3000 说明，token有误，跳登录
  response.data.code == 3000 ? router.push({name:"sign"}) : "" ;

  return response;
}, function (error) {
  fail("响应失败")
  return Promise.reject(error);
})

export { axios, baseURL }