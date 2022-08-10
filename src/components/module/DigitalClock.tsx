import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { ClockNum } from '../../interface/clockNum'

const SClockText = styled.div`
    font-size: 50px;
    color: #ffffff;
    margin-top: 50px;
    text-align: center;
    margin-bottom: 50px;
  `;

const DigitalClock: React.VFC<ClockNum> = ({ time }) => {
  return <SClockText>{dayjs(time).format("YYYY-MM-DD | HH:mm:ss")}</SClockText>;
};

export default DigitalClock;
