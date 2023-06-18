import React from "react";

type MouseClickEventType = React.MouseEvent<HTMLElement>;
type DispatchType = React.Dispatch<React.SetStateAction<unknown>>;

export type OnClickEventType = (() => void) | ((e: MouseClickEventType, dispatch: DispatchType | Dispatch<AnyAction>) => void);

// active windows
export type WindowType = {
    id?: string | number,
    height: number | string,
    width: number | string,
    x: number | string,
    y:  number | string,
    title:  null | string,
    minimized:  null | boolean,
    maximized:  null | boolean,
    Component?: typeof React.FunctionComponent,    
}

export type ActiveWindows = Array<WindowType>;

// pinned apps
export type PinnedApp = {
    id?: string | number,
    name: string,
    icon: string,
    width: string | number,
    height: string | number,
    onClick: OnClickEventType,
}

export type PinnedApps = Array<PinnedApp>;

// shortcut apps
export type ShortcutApp = {
    id?: string | number,
    className?: string,
    name: string,
    icon: string,
    width?: string | number,
    height?: string | number,
    onClick: OnClickEventType,
}

export type ShortcutApps = Array<ShortcutApp>;

export type StateType = {
    activeWindows: ActiveWindows,
    pinnedApps: PinnedApps,
    shortcutApps: ShortcutApps,
};

export type LockScreenType = {
    handleEnterFullScreen: () => void
};

export default StateType;