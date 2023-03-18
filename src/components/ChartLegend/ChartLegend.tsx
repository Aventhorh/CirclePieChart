import React, { FC } from "react";
import { IChartLegend } from "../../Models/IChartLegend";
import ChartLegendLarge from "./ChartLegendLarge";
import ChartLegendMedium from "./ChartLegendMedium";

const ChartLegend: FC<IChartLegend> = ({ data, state }) => {
  const renderChart = (state: string) => {
    switch (state) {
      case "large":
        return <ChartLegendLarge data={data} />;
      case "medium":
        return <ChartLegendMedium data={data} />;
      case "small":
        return <></>;
      default:
        return <></>;
    }
  };

  return renderChart(state);
};

export default ChartLegend;
