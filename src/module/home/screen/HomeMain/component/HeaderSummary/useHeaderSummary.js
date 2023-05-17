import {View, Text} from 'react-native';
import React, {useState} from 'react';

const useHeaderSummary = () => {
  const [summaryData, setSummaryData] = useState([
    {
      label: 'Wind',
      value: 0.7,
      unit: 'm/s SSE',
    },
    {
      label: 'Humadity',
      value: 57,
      unit: '%',
    },
    {
      label: 'UV index',
      value: 0.0,
      unit: '',
    },
    {
      label: 'Pressure',
      value: 1014,
      unit: 'hPa',
    },
    {
      label: 'Visiblity',
      value: 10.0,
      unit: 'km',
    },
    {
      label: 'Dew Point',
      value: 19,
      unit: ' C',
    },
  ]);

  return {
    summaryData,
    setSummaryData,
  };
};

export default useHeaderSummary;
