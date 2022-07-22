import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: auto;
`;
const Item = styled.span`
  margin-right: 10px;
  color: #fff;
  width: 100px;
`;

const WeatherItem = (props: any) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_OW_API_URL}/weather/?q=${props.pref}&units=metric&APPID=${process.env.REACT_APP_OW_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ItemWrap>
      <Item>{data.name}</Item>
      <Item>{data.weather[0].main}</Item>
      <Item>Tmp : {data.main.temp}°C</Item>
      <Item>Humidity : {data.main.humidity}%</Item>
      <img
        src={`${process.env.REACT_APP_OW_ICON_URL}/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
    </ItemWrap>
  );
};

export default WeatherItem;
