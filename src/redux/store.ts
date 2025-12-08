// filepath: /c:/Users/gaura/OneDrive/Documents/hotel-booking/src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; // Combine your reducers here

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;