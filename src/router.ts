import Vue from "vue";
import Router from "vue-router";
import HomePage from "./pages/HomePage.vue";
import DashBoard from "@/pages/DashBoard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/board",
      name: "dashboard",
      component: DashBoard,
    },
  ],
});
