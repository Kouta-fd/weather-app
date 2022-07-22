import React from "react";
import WeatherItem from "../module/WeatherItem";
import { pref } from "../../data/prefectures";

const WeatherList = () => {
  return (
    <div>
      {pref.map((item) => (
        <div key={item.code}>
          <WeatherItem pref={item.en} />
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
