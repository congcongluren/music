import { axios } from "@/utils/axios";
import router from "@/router";
export const user = {
  namespaced: true,
  state: {
    username: "",
    mobile: "",
    islogin: false
  },
  mutations: {
    setUser(state, payload) {
      if(payload){
        state.username = payload.username;
        state.mobile = payload.mobile;
        state.islogin = true;
      }
    }
  },
  actions: {
    reqUser(context, payload) {
      let user = {}

      // 判断user的值是否存储在session里面，如果有则不重复取
      if (sessionStorage.user && localStorage.token) {
        user = JSON.parse(sessionStorage.user);
        context.commit('setUser', user);
      } else {
        axios.get("/vue/getuserinfo").then(res => {
          user = res.data.result;
          sessionStorage.user = JSON.stringify(user);
          context.commit('setUser', user);
        })
      }
    }
  },
  getters: {

  }
}