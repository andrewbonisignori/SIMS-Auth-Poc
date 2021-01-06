import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Students from "../views/Students.vue";
import StudentsList from "../views/StudentsList.vue";
import StudentsDetail from "../views/StudentsDetail.vue";
import NotificationsList from "../views/NotificationsList.vue"
import store from "../store/index"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/students/profile",
    name: "StudentProfile",
    component: Students,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/students/list",
    name: "StudentList",
    component: StudentsList,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/students/:id",
    name: "StudentsDetail",
    component: StudentsDetail,
    props: true,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: NotificationsList,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, _from, next) => {
  const isAuthenticated = !!store.getters["auth/isAuthenticated"];
  if (to.matched.some(route => route.meta.authRequired) && !isAuthenticated){
    window.location.replace("/");
  } else {
    next();
  }
});

export default router;
