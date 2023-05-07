
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { ReduxState } from "../../types";
import {
  TbBatteryCharging2,
  TbBattery1,
  TbBattery2,
  TbBattery3,
  TbBattery4,
  TbBatteryOff,
} from "react-icons/tb";

type BatteryIconProps = {
  size?: number;
}

const BatteryIcon = (props: BatteryIconProps): JSX.Element | null => {
  const isCharging = useSelector((state: ReduxState) => state.desktop.battery.isCharging);
  const batteryLevel = useSelector((state: ReduxState) => state.desktop.battery.level);
  const [title, setTitle] = useState<string>("");

  const _setTitleProp = (isCharging: boolean, batteryLevel: number): void => {
    if (isCharging) {
      setTitle(
        `Battery status: ${(batteryLevel * 100).toFixed(
          0
        )}% available (plugged in)`
      );
      return;
    }
    setTitle(`Battery status: ${(batteryLevel * 100).toFixed(0)}% remaining`);
  };

  useEffect(() => {
    _setTitleProp(isCharging, batteryLevel);
  }, [isCharging, batteryLevel]);

  if (isCharging === true) {
    return <TbBatteryCharging2 {...props} title={title} /> ;
  }

  if (!batteryLevel || batteryLevel <= 0) {
    return <TbBatteryOff {...props} title={title} />;
  }

  if (batteryLevel > 0 && batteryLevel <= 0.25) {
    return <TbBattery1 {...props} title={title} />;
  }
  if (batteryLevel > 0.25 && batteryLevel <= 0.5) {
    return <TbBattery2 {...props} title={title} />;
  }
  if (batteryLevel > 0.5 && batteryLevel <= 0.75) {
    return <TbBattery3 {...props} title={title} />;
  }
  else{
    return <TbBattery4 {...props} title={title} />;
  }
};

export default BatteryIcon;