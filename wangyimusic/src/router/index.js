import Vue from "vue";
import VueRouter from "vue-router";

import player from "./palyer";
import main from "./main";
import me from "./me";
import search from "./search";
import sign from "./sign";
import guide from "./guide";

Vue.use(VueRouter);


const routes = [
  player,
  main,
  me,
  search,
  sign,
  guide,
  {
    path:"*",
    redirect:{
      name:"guide"
    }
  },
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router