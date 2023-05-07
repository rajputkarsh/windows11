import { useEffect } from "react";
import LockScreen from "./pages/lockScreen";
import DesktopScreen from "./pages/desktop";
import { useDispatch, useSelector } from "react-redux";
import {
  setBatteryIsCharging,
  setBatteryLevel,
} from "./redux/slices/desktopSlice";
import { motion } from "framer-motion";
import { ReduxState } from "./types";

function App() {
  const isScreenLocked = useSelector((state: ReduxState) => state.lockScreen.isLocked);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      
      (window.navigator as any)?.getBattery().then((battery: {[key: string]: any}) => {
        dispatch(setBatteryIsCharging(battery.charging));
        dispatch(setBatteryLevel(battery.level));

        battery.addEventListener("chargingchange", () => {
          dispatch(setBatteryIsCharging(battery.charging));
          dispatch(setBatteryLevel(battery.level));
        });

        return () => {
          battery.removeEventListener("chargingchange", () => {
            dispatch(setBatteryIsCharging(battery.charging));
          });
          battery.disconnect();
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return isScreenLocked ? (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <LockScreen />
    </motion.div>
  ) : (
    <DesktopScreen />
  );
}

export default App;
