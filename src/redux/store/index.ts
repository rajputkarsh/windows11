import { configureStore } from "@reduxjs/toolkit";
import desktopReducer from "../slices/desktopSlice";
import lockScreenReducer from "../slices/lockScreenSlice";

const store = configureStore({
  reducer: {
    desktop: desktopReducer,
    lockScreen: lockScreenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;