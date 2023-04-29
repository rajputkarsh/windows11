import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { wallpapers } from "../../assets";
import { LockScreenSliceType, LockScreenActionPayloadType } from "../../types/slice";

export const lockScreenSlice = createSlice({
  name: "lockScreen",
  initialState: {
    wallpaper: wallpapers[2],
    isLocked: true,
    validPIN: "123456",
  },
  reducers: {
    setLockScreenWallpaper: (state: LockScreenSliceType, action: PayloadAction<LockScreenActionPayloadType>) => {
      state.wallpaper = action.payload as string;
    },
    setDesktopLocked: (state: LockScreenSliceType, action: PayloadAction<LockScreenActionPayloadType>) => {
      state.isLocked = action.payload as boolean;
    },
  },
});

export const { setLockScreenWallpaper, setDesktopLocked } =
  lockScreenSlice.actions;

export default lockScreenSlice.reducer;
