export default {
  namespaced: true,
  state() {
    return {
      pizzas: [],
    };
  },

  mutations: {
    getMenu(state, payload) {
      return state.pizzas.push(payload);
    },
  },

  actions: {
    async getMenu(context) {
      const res = await fetch(
        "https://react-fast-pizza-api.onrender.com/api/menu"
      );
      const data = await res.json();
      if (!res.ok) return;

      context.commit("getMenu", data.data);
    },
  },

  getters: {
    pizzas(state) {
      return state.pizzas;
    },
  },
};
