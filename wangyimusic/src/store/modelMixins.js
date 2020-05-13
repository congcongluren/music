import {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} from "vuex"


export const forUser = {
  // 对象 user
  // 方法 setUser() 可以手动设置
  // 方法 getUser() 可以自动请求设置
  data(){
    return{

    }
  },
  methods:{
    ...mapMutations("user",['setUser']),
    ...mapActions("user",['reqUser'])
  },
  computed:{
    ...mapState([
      "user"
    ])
  },
  created(){
    console.log("users mixins model success!!!");
  }
}

export const forPlayer = {
  methods:{
    ...mapMutations("player",['play']),
    ...mapActions("player",['setSong'])
  },
  computed:{
    ...mapState(['player'])
  },
  created(){
    console.log("player mixins model success!!!");
  }
}