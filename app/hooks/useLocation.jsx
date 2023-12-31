import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestBackgroundPermissionsAsync();
    if (!granted) return;
    const result = await Location.getLastKnownPositionAsync();
    console.log({ coords: result });
    const { latitude, longitude } = result.coords;
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
