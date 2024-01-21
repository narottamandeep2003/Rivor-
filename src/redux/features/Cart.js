import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCart: (state, action) => {
      if (
        !state.value.some((_id) => {
          return _id === action.payload.id;
        })
      ) {
        state.value.push({
          id: action.payload.id,
          price: action.payload.price,
          color: action.payload.color,
          size: action.payload.size,
          quantity: action.payload.quantity,
          maxQuantity: action.payload.maxQuantity,
          imgUrl: action.payload.imgUrl,
        });
      }
    },
    IncCartItem: (state, action) => {
      state.value = state.value.map((val) => {
        if (val.id === action.payload.id) {
          if(val.quantity+1>val.maxQuantity) return val
          return { ...val, quantity: val.quantity + 1 };
        } else {
          return val;
        }
      });
      console.log("IncCartItem",action.payload.id)
    },
    DecCartItem: (state, action) => {
      state.value = state.value.map((val) => {
        if (val.id === action.payload.id) {
          if(val.quantity-1<0) return val
          return { ...val, quantity: val.quantity - 1 };
        } else {
          return val;
        }
      });
      console.log("IncCartItem",action.payload.id)
    },
  },
});
export const { addCart, IncCartItem ,DecCartItem} = CartSlice.actions;
export default CartSlice.reducer;
