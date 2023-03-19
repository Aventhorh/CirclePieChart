import React, { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { ICirclePieChartChildren } from "../../Models/ICirclePieChart";
import ChartLegend from "../ChartLegend/ChartLegend";

const CirclePieChartMedium: FC<ICirclePieChartChildren> = ({ data }) => {
  return (
    <section className="flex flex-row justify-start w-[520px] h-full mx-5 my-5 px-7 py-5 bg-[#171820] rounded-[10px]">
      <div className="flex flex-col">
        <h2 className="font-light text-[14px] text-white leading-[18.77px] w-full">
          Статистика осмотров
        </h2>

        <div className="flex flex-row items-center">
          <div className="flex justify-start items-start mt-5">
            <div className="flex justify-center items-center w-[135px] h-[135px] relative">
              <PieChart data={data} />
              <div
                className="absolute w-[85px] h-[85px] rounded-[50%] m-[8px] top-[17px] right-[17px]
             bg-[#1e262f] flex justify-center items-center flex-col"
              >
                <span className="text-ellipsis overflow-hidden max-w-[70px] font-normal text-[18px] text-[#fff] leading-[23.15px]">
                  {!data
                    ? 0
                    : data.reduce((acc, number) => acc + number?.value, 0)}
                </span>
                <span className="font-normal text-[10px] text-[#e5d8eb7a] leading-[12.77px]">
                  всего
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-end ml-16">
            <ChartLegend data={data} state={"medium"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CirclePieChartMedium;
