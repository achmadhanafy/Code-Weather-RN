import React, {useCallback, useState} from 'react';
import {
  capitalizeFirstLetter,
  getWindScale,
} from '../../../../../../util/function';

const useHeaderSection = () => {
  const [headerData, setHeaderData] = useState({
    desc: '',
    location: '',
    subDesc: '',
    icon: null,
    temp: '',
    feels: '',
  });

  const callbackHeaderData = useCallback(getCurrentWeatherResponse => {
    const data = {
      desc: capitalizeFirstLetter(
        getCurrentWeatherResponse.weather[0]?.description,
      ),
      subDesc: getWindScale(getCurrentWeatherResponse?.wind?.speed?.toFixed(0)),
      icon: getCurrentWeatherResponse.weather[0]?.icon,
      location: getCurrentWeatherResponse?.name,
      temp: getCurrentWeatherResponse.main?.temp?.toFixed(0),
      feels: getCurrentWeatherResponse.main?.feels_like?.toFixed(0),
    };
    setHeaderData(data);
  }, []);

  return {
    headerData,
    setHeaderData,
    callbackHeaderData,
  };
};

export default useHeaderSection;
