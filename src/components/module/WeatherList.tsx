import React from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const WeatherList = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_OW_API_URL}/weather/?q=Tokyo&units=metric&APPID=${process.env.REACT_APP_OW_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div>
      <span>{dayjs(data.ts).format("YYYY-MM-DD")}</span>
      <span>{data.weather[0].main}</span>
      <span>{data.main.temp}°C</span>
      <span>{data.main.humidity}%</span>
      <span>{data.name}</span>
      <img
        src={`${process.env.REACT_APP_OW_ICON_URL}/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
};

export default WeatherList;
