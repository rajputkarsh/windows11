import { icons } from "../../assets";
import { CommandLineApp , FileExplorerApp, SettingsApp } from "../../components";
import CONSTANTS from "../../constants";
import { StateType } from "../../types";
import { setNewActiveWindow } from "../slices/desktopSlice";

const initialState: StateType = {
  activeWindows: [],
  pinnedApps: [
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 25,
      height: 25,
      onClick: (_e, dispatch) => {
        dispatch(
          setNewActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 28,
      height: 28,
      onClick: () => (window.location.href = "mailto:r.utkarsh.0010@gmail.com"),
    },
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      width: 28,
      height: 28,
      onClick: () => {
        window.open(
          "https://www.google.com/search?q=Utkarsh+Rajput+linkedin",
          "_blank",
          CONSTANTS.NEW_WINDOW_PARAMS
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", CONSTANTS.NEW_WINDOW_PARAMS);
      },
    },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 28,
      height: 28,
      onClick: (_e, dispatch) => {
        dispatch(
          setNewActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
  ],
  shortcutApps: [
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://www.google.com/search?q=Utkarsh+Rajput+linkedin",
          "_blank",
          CONSTANTS.NEW_WINDOW_PARAMS
        );
      },
    },
    {
      name: "GitHub",
      icon: icons.apps.github,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://github.com/rajputkarsh",
          "_blank",
          CONSTANTS.NEW_WINDOW_PARAMS
        );
      },
    },
    {
      name: "LinkedIn",
      icon: icons.apps.linkedin,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://linkedin.com/in/utkarsh-rajput",
          "_blank",
          CONSTANTS.NEW_WINDOW_PARAMS
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 35,
      height: 35,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", CONSTANTS.NEW_WINDOW_PARAMS);
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 35,
      height: 35,
      onClick: () => (window.location.href = "mailto:r.utkarsh.0010@gmail.com"),
    },
    {
      name: "Command Prompt",
      icon: icons.apps.winCMD,
      width: 35,
      height: 35,
      onClick: (_e, dispatch) => {
        dispatch(
          setNewActiveWindow({
            title: "C:\\Windows\\system32\\cmd.exe",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: CommandLineApp,
          })
        );
      },
    },
    // {
    //   name: "Windows Defender",
    //   icon: icons.apps.winDefender,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 35,
      height: 35,
      onClick: (_e, dispatch) => {
        dispatch(
          setNewActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "Mail",
      icon: icons.apps.winMail,
      width: 35,
      height: 35,
      onClick: () => (window.location.href = "mailto:r.utkarsh.0010@gmail.com"),
    },
    // {
    //   name: "Search",
    //   icon: icons.apps.winSearch,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 35,
      height: 35,
      onClick: (_e, dispatch) => {
        dispatch(
          setNewActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
    // {
    //   name: "Trash Full",
    //   icon: icons.apps.winTrashFull,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "About This Project",
      icon: icons.apps.github,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://github.com/rajputkarsh/windows11",
          "_blank",
          CONSTANTS.NEW_WINDOW_PARAMS
        );
      },
    },
    {
      name: "Portfolio",
      icon: icons.apps.logo,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://utkarshrajput.com",
          "_blank",
          CONSTANTS.NEW_WINDOW_PARAMS
        );
      },
    },
  ],
};

export default initialState;
