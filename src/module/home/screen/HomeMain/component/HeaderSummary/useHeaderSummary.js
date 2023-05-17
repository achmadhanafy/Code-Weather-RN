import {View, Text} from 'react-native';
import React, {useState} from 'react';

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

  return {
    summaryData,
    setSummaryData,
  };
};

export default useHeaderSummary;
