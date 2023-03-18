import React, { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { ICirclePieChartChildren } from "../../Models/ICirclePieChart";
import ChartLegend from "../ChartLegend/ChartLegend";

const CirclePieChartMedium: FC<ICirclePieChartChildren> = ({ data }) => {
  return (
    <section className="flex flex-row justify-center w-[520px] h-full mx-5 my-5 px-7 py-5 bg-[#171820] rounded-[10px]">
      <div className="flex-1 flex flex-col items-center">
        <h2 className="font-light text-[14px] text-white leading-[18.77px] w-full">
          Статистика осмотров
        </h2>

        <div className="flex justify-start items-start w-full mt-5">
          <div className="piechart_medium_small">
            <PieChart data={data} />
            <div className="chart_inside_medium_small">
              <span className="font-normal text-[18px] text-[#fff] leading-[23.15px]">
                {!data
                  ? 0
                  : data.reduce((acc, number) => acc + number.value, 0)}
              </span>
              <span className="font-normal text-[10px] text-[#e5d8eb7a] leading-[12.77px]">
                всего
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ChartLegend data={data} state={"medium"} />
      </div>
    </section>
  );
};

export default CirclePieChartMedium;
