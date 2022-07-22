import React from "react";
import DigitalClock from "../module/DigitalClock";
import { useTime } from "../../hooks/useTime";

const Clock = () => {
  const time = useTime(1000);
  return (
    <>
      <DigitalClock time={time} />
    </>
  );
};

export default Clock;
