import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import ecoReducer from "./ecoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    eco: ecoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
