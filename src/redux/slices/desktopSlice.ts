import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { profiles, wallpapers } from "../../assets";
import initialState from "../store/initialState";
import { DesktopActionPayloadType, DesktopSliceType } from "../../types/slice";
import { WindowType } from "../../types/state";

const desktopSlice = createSlice({
  name: "desktop",
  initialState: {
    profileImage: profiles.img,
    activeWindows: [...initialState.activeWindows],
    wallpaper: wallpapers[0],
    battery: {
      isCharging: false,
      level: 0,
    },
    winModalToggled: false,
    pinnedApps: [...initialState.pinnedApps],
    shortcutApps: [...initialState.shortcutApps],
  },
  reducers: {
    setDesktopWallpaper: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      state.wallpaper = wallpapers[action.payload as number];
    },
    setProfileImage: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      state.profileImage = action.payload as string;
    },
    setNewActiveWindow: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      const {
        height = "80vh",
        width = "80vw",
        x = 10,
        y = 10,
        title = "",
        minimized = false,
        maximized = false,
        Component = () => null,
      } = action.payload as WindowType;

      const newWindow: WindowType = {
        id: state.activeWindows.length + 1,
        height,
        width,
        x,
        y,
        title,
        minimized,
        maximized,
        Component,
      };

      state.activeWindows.push(newWindow);
    },
    removeActiveWindow: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      const filtered = state.activeWindows.filter(
        (win: WindowType) => win.id !== action.payload
      );

      state.activeWindows = filtered;
    },
    minimizeActiveWindow: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      const { id, minimized } = action.payload as WindowType;

      const filtered = state.activeWindows.map((win: WindowType) => {
        if (win.id === id) {
          win.minimized = minimized;
        }
        return win;
      });

      state.activeWindows = filtered;
    },
    maximizeActiveWindow: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      const id = action.payload;

      const filtered = state.activeWindows.map((win: WindowType) => {
        if (win.id === id) {
          win.maximized = !win.maximized;
        }
        return win;
      });

      state.activeWindows = filtered;
    },
    cancelMaximizeActiveWindow: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      const id = action.payload;

      const filtered = state.activeWindows.map((win: WindowType) => {
        if (win.id === id) {
          win.maximized = false;
        }
        return win;
      });

      state.activeWindows = filtered;
    },
    setWinModalToggled: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      state.winModalToggled = action.payload as boolean;
    },
    setBatteryIsCharging: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      state.battery.isCharging = action.payload as boolean;
    },
    setBatteryLevel: (state: DesktopSliceType, action: PayloadAction<DesktopActionPayloadType>) => {
      state.battery.level = action.payload as number;
    },
  },
});

export const {
  setDesktopWallpaper,
  setProfileImage,
  setNewActiveWindow,
  removeActiveWindow,
  minimizeActiveWindow,
  maximizeActiveWindow,
  cancelMaximizeActiveWindow,
  setWinModalToggled,
  setBatteryIsCharging,
  setBatteryLevel,
} = desktopSlice.actions;

export default desktopSlice.reducer;
