import { createStore } from "vuex";

import menuModule from "./modules/menu.js";
import cartModule from "./modules/cart.js";

const store = createStore({
  modules: {
    menu: menuModule,
    cart: cartModule,
  },

  state() {
    return {
      firstname: "",
      email: "",
      address: "",
    };
  },

  mutations: {
    setUserInfo(state, payload) {
      state.firstname = payload.firstname;
      state.email = payload.email;
      state.address = payload.address;
    },
  },

  actions: {
    setUser(context, payload) {
      context.commit("setUserInfo", payload);
    },
  },

  getters: {
    firstname(state) {
      return state.firstname;
    },
    email(state) {
      return state.email;
    },
    address(state) {
      return state.address;
    },
  },
});

export default store;
