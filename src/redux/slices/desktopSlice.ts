import { createSlice } from "@reduxjs/toolkit";
import { profiles, wallpapers } from "../../assets";
import initialState from "../store/initialState";

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
    setDesktopWallpaper: (state, action) => {
      state.wallpaper = wallpapers[action.payload];
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    setNewActiveWindow: (state, action) => {
      const {
        height = "80vh",
        width = "80vw",
        x = 10,
        y = 10,
        title = "",
        minimized = false,
        maximized = false,
        Component = () => null,
      } = action.payload;

      const newWindow = {
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
    removeActiveWindow: (state, action) => {
      const filtered = state.activeWindows.filter(
        (win) => win.id !== action.payload
      );

      state.activeWindows = filtered;
    },
    minimizeActiveWindow: (state, action) => {
      const { id, minimized } = action.payload;

      const filtered = state.activeWindows.map((win) => {
        if (win.id === id) {
          win.minimized = minimized;
        }
        return win;
      });

      state.activeWindows = filtered;
    },
    maximizeActiveWindow: (state, action) => {
      const id = action.payload;

      const filtered = state.activeWindows.map((win) => {
        if (win.id === id) {
          win.maximized = !win.maximized;
        }
        return win;
      });

      state.activeWindows = filtered;
    },
    cancelMaximizeActiveWindow: (state, action) => {
      const id = action.payload;

      const filtered = state.activeWindows.map((win) => {
        if (win.id === id) {
          win.maximized = false;
        }
        return win;
      });

      state.activeWindows = filtered;
    },
    setWinModalToggled: (state, actions) => {
      state.winModalToggled = actions.payload;
    },
    setBatteryIsCharging: (state, action) => {
      state.battery.isCharging = action.payload;
    },
    setBatteryLevel: (state, action) => {
      state.battery.level = action.payload;
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
