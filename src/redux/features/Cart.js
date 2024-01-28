import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: [],
    total:0
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
      let TempTotal=0
      state.value.forEach((ele)=>{
        TempTotal+=(ele.quantity*ele.price)
      })
      state.total=TempTotal
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
      let TempTotal=0
      state.value.forEach((ele)=>{
        TempTotal+=(ele.quantity*ele.price)
      })
      state.total=TempTotal
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
      let TempTotal=0
      state.value.forEach((ele)=>{
        TempTotal+=(ele.quantity*ele.price)
      })
      state.total=TempTotal
    },
  },
});
export const { addCart, IncCartItem ,DecCartItem} = CartSlice.actions;
export default CartSlice.reducer;
