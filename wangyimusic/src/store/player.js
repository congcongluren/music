import { axios } from "@/utils/axios";
export const player = {
  namespaced: true,
  state: {
    play: false,
    ready: false,
    name: "default",
    src: "",
    musicId: Number,
    song: [],
    autoplay: "autoplay"
  },
  mutations: {
    play(state) { // 控制音乐开关，直接调用改变状态
      if(state.ready){
        state.play = !state.play;
      }
    },
    init(state, payload) { // 内部使用，初始化
      state.play = false;
      state.musicId = payload.musicId;
      state.name = payload.name;
      state.song = payload.song;
      state.src = payload.song[0].url;
      state.ready = false;
      state.play = true;
    }
  },
  actions: {
    setSong({ commit }, payload) { // 根据id初始化音乐
      // payload = {
      //   musicId,
      //   name
      // }
      let obj = {...payload};
      axios.get("/yun/check/music",{ // 判断歌曲是否可用的请求
        params:{
          id: obj.musicId
        }
      }).then(res=>{
        if(res.data.success){ // 判断歌曲是否可用
          axios.get("/yun/song/url", { // 获取音乐接口地址
            params: {
              id: obj.musicId
            }
          })
          .then(res => { // 返回数据，并发送commit到mutations
            obj.song = res.data.data;
            commit("init", obj);
          });
        }else{
          alert(res.data.message)
        }
      })


    }
  }
}