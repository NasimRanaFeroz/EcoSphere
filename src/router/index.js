import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Shop from "../pages/Shop.vue";
import Cart from "../pages/Cart.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Dashboard from "../pages/Dashboard.vue";
import Profile from "../pages/Profile.vue";
import FAQ from "../pages/FAQ.vue";
import Privacy from "../pages/Privacy.vue";
import Policy from "../pages/Policy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/privacy-policy-and-terms",
    name: "Privacy and Terms",
    component: Privacy,
  },
  {
    path: "/shipping-and-returns-policy",
    name: "Shipping and Returns Policy",
    component: Policy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
