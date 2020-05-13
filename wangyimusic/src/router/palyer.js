export default {
  path:"/player/:musicId/:title",
  name:"player",
  component: ()=> import("@/views/palyer")
}