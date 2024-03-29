import React, { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { ICirclePieChartChildren } from "../../Models/ICirclePieChart";
import ChartLegend from "../ChartLegend/ChartLegend";

const CirclePieChartLarge: FC<ICirclePieChartChildren> = ({ data }) => {
  return (
    <section
      className="flex justify-center w-[520px] h-full
     mx-5 my-5 px-5 py-5 flex-col bg-[#171820] rounded-[10px]"
    >
      <div className="flex-1 flex flex-col items-center">
        <h2 className="font-light text-[14px] text-white leading-[18.77px] w-full">
          Статистика осмотров
        </h2>
        <div className="flex justify-center items-center max-w-[470px] mt-8">
          <div className="flex justify-center items-center w-[235px] h-[235px] relative">
            <PieChart data={data} />
            <div
              className="absolute w-[150px] h-[150px] rounded-[50%] m-[8px] top-[35px] right-[35px]
             bg-[#1e262f] flex justify-center items-center flex-col"
            >
              <span className="text-ellipsis overflow-hidden max-w-[120px] font-normal text-[24px] text-[#fff] leading-[28.15px]">
                {!data
                  ? 0
                  : data.reduce((acc, number) => acc + number?.value, 0)}
              </span>
              <span className="font-light text-[16px] text-[#e5d8eb7a] leading-[18.77px]">
                всего
              </span>
            </div>
          </div>
        </div>
        <ChartLegend data={data} state={"large"} />
      </div>
    </section>
  );
};

export default CirclePieChartLarge;
