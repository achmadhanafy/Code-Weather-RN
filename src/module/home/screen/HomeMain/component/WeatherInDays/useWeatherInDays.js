import React, {useState, useCallback, useMemo} from 'react';
import moment from 'moment';

const useWeatherInDays = () => {
  const [weatherInDay, setWeatherInDay] = useState([]);
  const [showDetailData, setShowDetailData] = useState({});
  const detailWeather = useMemo(() => {
    return [
      {
        id: 1,
        label: 'Precipitation',
        value: showDetailData?.precipitation,
        unit: 'mm',
      },
      {
        id: 2,
        label: 'Probability of precipitation',
        value: 67, // Not found api
        unit: '%',
      },
      {
        id: 3,
        label: 'Wind',
        value: showDetailData?.wind?.toFixed(1),
        unit: 'm/s',
      },
      {
        id: 4,
        label: 'Pressure',
        value: showDetailData?.pressure,
        unit: 'hPa',
      },
      {
        id: 5,
        label: 'Humidity',
        value: showDetailData?.humidity,
        unit: '%',
      },
      {
        id: 6,
        label: 'UV index',
        value: 10.9, // Not found api
        unit: '',
      },
    ];
  }, [showDetailData]);

  const callbackWeatherInDay = useCallback(getHourWeatherResponse => {
    const filterData = getHourWeatherResponse?.list?.filter(element => {
      const time = moment(element?.dt_txt).format('HH');
      return time === '00';
    });

    const mapData = filterData?.map(data => {
      const time1 = moment(data?.dt_txt).format('MMM D');
      const hourlyList = getHourWeatherResponse?.list?.filter(hourly => {
        const time2 = moment(hourly?.dt_txt).format('MMM D');
        return time1 === time2;
      });
      const getTemp = hourlyList?.map(temp => temp?.main?.temp);

      return {
        date: data?.dt_txt,
        tempMin: Math.min(...getTemp),
        tempMax: Math.max(...getTemp),
        icon: data?.weather[0]?.icon,
        hourlyList,
        precipitation: data?.main?.temp_kf,
        wind: data?.wind?.speed,
        pressure: data?.main?.pressure,
        humidity: data?.main?.humidity,
        weather: data?.weather,
      };
    });

    setWeatherInDay(mapData);
  }, []);

  return {
    weatherInDay,
    setWeatherInDay,
    callbackWeatherInDay,
    detailWeather,
    showDetailData,
    setShowDetailData,
  };
};

export default useWeatherInDays;
