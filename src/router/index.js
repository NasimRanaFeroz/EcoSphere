import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
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
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/privacy-and-terms",
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
