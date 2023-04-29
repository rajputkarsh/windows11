import React from "react";

type MouseClickEventType = React.MouseEvent<HTMLElement>;
type DispatchType = React.Dispatch<React.SetStateAction<unknown>>;

type OnClickEventType = (() => void) | ((e: MouseEventType, dispatch: DispatchType) => void);

// active windows
export type WindowType = {
    id: number,
    height: number | string,
    width: number | string,
    x: number | string,
    y:  number | string,
    title:  null | string,
    minimized:  null | boolean,
    maximized:  null | boolean,
    Component: null | React.FunctionComponent,    
}

export type ActiveWindows = Array<WindowType>;

// pinned apps
export type PinnedApp = {
    name: string,
    icon: string,
    width: string | number,
    height: string | number,
    onClick: OnClickEventType,
}

export type PinnedApps = Array<PinnedApp>;

// shortcut apps
type ShortcutApp = {
    name: string,
    icon: string,
    width: string | number,
    height: string | number,
    onClick: OnClickEventType,
}

export type ShortcutApps = Array<ShortcutApp>;

export type StateType = {
    activeWindows: ActiveWindows,
    pinnedApps: PinnedApps,
    shortcutApps: ShortcutApps,
};

export default StateType;