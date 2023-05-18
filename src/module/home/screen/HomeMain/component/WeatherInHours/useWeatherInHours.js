import React, {useCallback, useState} from 'react';

const useWeatherInHours = () => {
  const [weathers, setWeathers] = useState([]);

  const callbackWeathers = useCallback(getHourWeatherResponse => {
    const data = getHourWeatherResponse?.list?.map(element => ({
      id: element?.dt,
      date: element?.dt_txt,
      icon: element?.weather[0]?.icon,
      temp: element?.main?.temp,
    }));
    setWeathers(data);
  }, []);

  return {
    weathers,
    setWeathers,
    callbackWeathers,
  };
};

export default useWeatherInHours;
