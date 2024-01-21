import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./features/userRole"
import CartSlice from "./features/Cart"
export default configureStore({
  reducer: {
    Role:roleReducer,
    Cart:CartSlice
  },
});
