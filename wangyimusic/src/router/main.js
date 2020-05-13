export default {
  path: "/main",
  name: "main",
  component: () => import("@/views/main"),
  children: [
    {
      path: "hot",
      name: "hot",
      component: () => import("@/views/main/Hot")
    },
    {
      path: "recommend",
      name: "recommend",
      component: () => import("@/views/main/Recommend")
    },
    {
      path: "*",
      redirect: {
        name: "recommend"
      }
    },
  ]
}
