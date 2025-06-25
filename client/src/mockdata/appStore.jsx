// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// const appStore = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default appStore;



// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "./localStorageUtils";

const preloadedState = {
  cart: loadCartFromLocalStorage() || { items: [] },
};

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});


appStore.subscribe(() => {
  saveCartToLocalStorage(appStore.getState().cart);
});

export default appStore;
