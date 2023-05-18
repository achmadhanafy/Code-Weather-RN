import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';

const useHeaderSummary = () => {
  const [summaryData, setSummaryData] = useState([
    {
      label: 'Wind',
      value: 0.7,
      unit: 'm/s',
      key: 'wind',
    },
    {
      label: 'Humadity',
      value: 57,
      unit: '%',
      key: 'humadity',
    },
    {
      label: 'UV index',
      value: 0.0,
      unit: '',
      key: 'uv',
    },
    {
      label: 'Pressure',
      value: 1014,
      unit: 'hPa',
      key: 'pressure',
    },
    {
      label: 'Visiblity',
      value: 10.0,
      unit: 'km',
      key: 'visibility',
    },
    {
      label: 'Dew Point',
      value: 19,
      unit: '°C',
      key: 'dew',
    },
  ]);

  const callbackSummaryData = useCallback(
    getCurrentWeatherResponse => {
      const key = {
        wind: getCurrentWeatherResponse.wind?.speed?.toFixed(1),
        humadity: getCurrentWeatherResponse.main?.humidity,
        pressure: getCurrentWeatherResponse.main?.pressure,
        uv: '0.0', // Not found api data
        visibility: (getCurrentWeatherResponse.visibility / 1000)?.toFixed(1),
        dew: 20, // Not found api data
      };
      const data = summaryData.map(element => {
        return {
          label: element.label,
          value: key[element.key],
          unit: element.unit,
          key: element.key,
        };
      });
      setSummaryData(data);
    },
    [summaryData],
  );

  return {
    summaryData,
    setSummaryData,
    callbackSummaryData,
  };
};

export default useHeaderSummary;
