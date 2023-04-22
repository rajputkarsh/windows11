import { createSlice } from "@reduxjs/toolkit";
import { wallpapers } from "../../assets";

export const lockScreenSlice = createSlice({
  name: "lockScreen",
  initialState: {
    wallpaper: wallpapers[2],
    isLocked: true,
    validPIN: "123456",
  },
  reducers: {
    setLockScreenWallpaper: (state, action) => {
      state.wallpaper = action.payload;
    },
    setDesktopLocked: (state, action) => {
      state.isLocked = action.payload;
    },
  },
});

export const { setLockScreenWallpaper, setDesktopLocked } =
  lockScreenSlice.actions;

export default lockScreenSlice.reducer;
