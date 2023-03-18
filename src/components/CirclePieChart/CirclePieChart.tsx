import React, { FC } from "react";
import { ICirclePieChart } from "../../Models/ICirclePieChart";
import CirclePieChartLarge from "./CirclePieChartLarge";
import CirclePieChartMedium from "./CirclePieChartMedium";
import CirclePieChartSmall from "./CirclePieChartSmall";

const CirclePieChart: FC<ICirclePieChart> = ({ data, state }) => {
  const renderChart = (state: string) => {
    switch (state) {
      case "large":
        return <CirclePieChartLarge data={data} />;
      case "medium":
        return <CirclePieChartMedium data={data} />;
      case "small":
        return <CirclePieChartSmall data={data} />;
      default:
        return <></>;
    }
  };

  return renderChart(state);
};

export default CirclePieChart;
