import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/Products.vue";
import BlogPost from "../views/BlogPost.vue";
import Category from "../views/Category.vue";
import VendorDashboard from "../views/VendorDashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: VendorDashboard,
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/blogpost",
      name: "blogpost",
      component: BlogPost
    },
    {
      path: "/category",
      name: "category",
      component: Category
    }
  ],
});

export default router;
