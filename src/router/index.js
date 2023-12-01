import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MenuPage from "../pages/MenuPage.vue";
import CartPage from "../pages/CartPage.vue";
import NotFound from "../pages/NotFound.vue";
import OrderForm from "../components/order/OrderForm.vue";
import OrderSuccess from "../components/order/OrderSuccess.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/menu",
      component: MenuPage,
    },
    {
      path: "/cart",
      component: CartPage,
    },
    {
      path: "/form",
      component: OrderForm,
    },
    {
      path: "/order",
      component: OrderSuccess,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
