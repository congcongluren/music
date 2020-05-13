export default {
  path:"/search",
  component: ()=> import("@/views/search"),
  redirect:{name:"hotword"},
  children:[
    {
      path:"hotword",
      name:"hotword",
      component: ()=> import("@/views/search/hotword")
    },
    {
      path:"detail/:keyword",
      name:"detail",
      component: ()=> import("@/views/search/detail")
    },
    {
      path:"*",
      redirect:{
        name:"hotword"
      }
    }
  ]
}