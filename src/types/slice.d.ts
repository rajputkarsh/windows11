import { NullableMappedType } from "./helpers";
import { ActiveWindows, PinnedApps, ShortcutApps, WindowType } from "./state";

export type LockScreenSliceType = {
    wallpaper: string,
    isLocked: boolean,
    validPIN: string,
};

export type LockScreenActionPayloadType = string | boolean;


export type DesktopSliceType = {
    profileImage: string,
    activeWindows: ActiveWindows,
    wallpaper: string,
    battery: {
        isCharging: boolean,
        level: number,
    },
    winModalToggled: boolean,
    pinnedApps: PinnedApps,
    shortcutApps: ShortcutApps,
};

export type DesktopActionPayloadType = string | boolean | number | Partial<NullableMappedType<WindowType>>;

type ReduxState = {
    desktop : DesktopSliceType,
    lockScreen: LockScreenSliceType
}

export default ReduxState;
