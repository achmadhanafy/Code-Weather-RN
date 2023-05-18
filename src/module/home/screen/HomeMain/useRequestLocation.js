import Geolocation from '@react-native-community/geolocation';
import React, {useState, useEffect} from 'react';

const useRequestLocation = onSuccess => {
  const [locationGranted, setLocationGranted] = useState(false);
  const onSuccessLocation = () => {
    setLocationGranted(true);
  };
  const onErrorLocation = () => {
    console.log('error');
  };

  // Request Access Location
  useEffect(() => {
    Geolocation.requestAuthorization(onSuccessLocation, onErrorLocation);
  }, []);

  useEffect(() => {
    if (locationGranted) {
      const onError = err => {
        console.log(err);
      };
      Geolocation.getCurrentPosition(
        position => onSuccess(position),
        err => onError(err),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [locationGranted]);

  return {
    locationGranted,
    setLocationGranted,
  };
};

export default useRequestLocation;
