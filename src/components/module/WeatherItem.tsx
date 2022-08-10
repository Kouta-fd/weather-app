import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

const ItemRed = styled.span`
  color: red;
`;

const ItemGreen = styled.span`
  color: green;
`;

const Rain = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: blue;
`;

const Cloud = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: gray;
`;

const Sun = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: red;
`;

const Green = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: green;
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
      {/* <Item>{data.name}</Item> */}

      {data.weather[0].main == "Rain" ? (
        data.weather[0].main == "Cloud" ? (
          <Sun></Sun>
        ) : (
          <Rain></Rain>
        )
      ) : (
        <Cloud></Cloud>
      )}

      {data.main.temp > 20 ? (
        data.main.temp > 30 ? (
          <Sun></Sun>
        ) : (
          <Green></Green>
        )
      ) : (
        <Rain></Rain>
      )}
      {/* °C */}

      {/* <Item>Humidity : {data.main.humidity}%</Item> */}
      {/* <img
        src={`${process.env.REACT_APP_OW_ICON_URL}/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      /> */}
    </ItemWrap>
  );
};

export default WeatherItem;
