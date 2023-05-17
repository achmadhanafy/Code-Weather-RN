import React, {useState} from 'react';
import {Icon} from '../../../../../../config/Image';

const useWeatherInHours = () => {
  const [weathers, setWeathers] = useState([
    {
      id: 1,
      date: '2022-12-10 15:00:00',
      icon: Icon,
      temp: 27,
    },
    {
      id: 2,
      date: '2022-12-10 15:00:00',
      icon: Icon,
      temp: 27,
    },
    {
      id: 3,
      date: '2022-12-10 15:00:00',
      icon: Icon,
      temp: 27,
    },
    {
      id: 4,
      date: '2022-12-10 15:00:00',
      icon: Icon,
      temp: 27,
    },
    {
      id: 5,
      date: '2022-12-10 15:00:00',
      icon: Icon,
      temp: 27,
    },
    {
      id: 5,
      date: '2022-12-10 15:00:00',
      icon: Icon,
      temp: 27,
    },
  ]);
  return {
    weathers,
    setWeathers,
  };
};

export default useWeatherInHours;
