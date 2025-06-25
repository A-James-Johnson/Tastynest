import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      // state.items.pop(action.payload);
      const existingitems=state.items.find((item)=> item.id===action.payload.id);
      if(existingitems){
      if(existingitems.quantity>1){
        existingitems.quantity-=1;

      }
      else{
          state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    }
    },
    clearItem(state, action) {
      return { items: [] };
    },
  },
});

export const{addItem,removeItem,clearItem} =cartSlice.actions;

export default cartSlice.reducer;
