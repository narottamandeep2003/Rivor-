import { createSlice } from "@reduxjs/toolkit";
export const RoleSlice = createSlice({
  name: "Role",
  initialState: {
    value: {
      active: false,
      role: "User",
    },
  },
  reducers: {
    changeRole: (state, action) => {
      state.value.active = action.payload.active;
      state.value.role = action.payload.role;
    },
  },
});
export const { changeRole } = RoleSlice.actions;
export default RoleSlice.reducer;
