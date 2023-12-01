export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },

  mutations: {
    addToCart(state, payload) {
      const pizzaData = payload;
      const pizzaInCartIndex = state.items.findIndex(
        (p) => p.pizzaId === pizzaData.id
      );

      if (pizzaInCartIndex >= 0) {
        state.items[pizzaInCartIndex].qty++;
      } else {
        const newItem = {
          pizzaId: pizzaData.id,
          name: pizzaData.name,
          imageUrl: pizzaData.imageUrl,
          unitPrice: pizzaData.unitPrice,
          ingredients: pizzaData.ingredients,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += pizzaData.unitPrice;
    },

    removeItemFromCart(state, payload) {
      const pizId = payload.pizzaId;
      const pizzaInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.pizzaId === pizId
      );
      const pizzaData = state.items[pizzaInCartIndex];

      state.items.splice(pizzaInCartIndex, 1);
      state.qty -= pizzaData.qty;
      state.total -= pizzaData.unitPrice * pizzaData.qty;
    },

    decreaseItemQty(state, payload) {
      const pizId = payload.pizzaId;
      const pizzaInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.pizzaId === pizId
      );
      const pizzaData = state.items[pizzaInCartIndex];

      if (pizzaData.qty > 0) {
        state.qty -= 1;
        pizzaData.qty -= 1;
        state.total -= pizzaData.unitPrice * 1;
      }
      if (pizzaData.qty === 0) {
        state.items.splice(pizzaInCartIndex, 1);
      }
    },

    increaseItemQty(state, payload) {
      const pizId = payload.pizzaId;
      const pizzaInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.pizzaId === pizId
      );
      const pizzaData = state.items[pizzaInCartIndex];

      state.qty += 1;
      pizzaData.qty += 1;
      state.total += pizzaData.unitPrice * 1;
    },

    removeAllItems(state) {
      state.items = [];
      state.total = 0;
      state.qty = 0;
    },
  },

  actions: {
    addCart(context, payload) {
      const pizzaId = payload.id;
      const pizzas = context.rootGetters["menu/pizzas"];
      const pizza = pizzas[0].find((pizza) => pizza.id === pizzaId);

      context.commit("addToCart", pizza);
    },

    removeItem(context, payload) {
      context.commit("removeItemFromCart", payload);
    },

    decreaseItem(context, payload) {
      context.commit("decreaseItemQty", payload);
    },

    increaseItem(context, payload) {
      context.commit("increaseItemQty", payload);
    },

    removeAll(context) {
      context.commit("removeAllItems");
    },
  },

  getters: {
    pizzas(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
  },
};
