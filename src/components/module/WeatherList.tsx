import React from "react";
import WeatherItem from "../module/WeatherItem";
import { pref } from "../../data/prefectures";
import styled from "styled-components";

const WeatherList = () => {
  const Wrap = styled.div`
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    margin: auto;
  `;
  return (
    <>
      <Wrap>
        {pref.map((item) => (
          <div key={item.code}>
            <WeatherItem pref={item.en} />
          </div>
        ))}
      </Wrap>
    </>
  );
};

export default WeatherList;
