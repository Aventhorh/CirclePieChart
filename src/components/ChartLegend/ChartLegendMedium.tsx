import React, { FC } from "react";
import { IChartLegendChildren } from "../../Models/IChartLegend";
import { TData } from "../../Types/TData";

const ChartLegendMedium: FC<IChartLegendChildren> = ({ data }) => {
  const renderLegend = (item: TData) => (
    <li className="flex flex-row items-center">
      <div
        className="w-[20px] h-[20px] rounded-[2px]"
        style={{ backgroundColor: `${item?.color}` }}
      />
      <p className="font-light text-[14px] text-white leading-[16.42px] pl-[10px] pb-[2px]">
        {item?.title}
      </p>
      <span className="text-white mx-[10px] pb-[2px]">&#183;</span>
      <p className="font-normal text-[14px] text-white leading-[16px] pb-[2px]">
        {item?.value}
      </p>
    </li>
  );

  return (
    <ul className="grid grid-cols-2 gap-2">
      {data?.map((item: TData) => renderLegend(item))}
    </ul>
  );
};

export default ChartLegendMedium;
