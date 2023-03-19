import React, { FC } from "react";
import { IChartLegendChildren } from "../../Models/IChartLegend";
import { TData } from "../../Types/TData";

const ChartLegendMedium: FC<IChartLegendChildren> = ({ data }) => {
  const renderLegend = (item: TData) => (
    <tr>
      <td>
        <div
          className="w-[20px] h-[20px] rounded-[2px]"
          style={{ backgroundColor: `${item?.color}` }}
        />
      </td>
      <td>
        <p className="text-ellipsis overflow-hidden max-w-[150px] font-light text-[14px] text-white leading-[16.42px] pl-[10px] pb-[2px]">
          {item?.title}
        </p>
      </td>
      <td>
        <span className="text-white mx-[10px]">&#183;</span>
      </td>
      <td>
        <p className="text-ellipsis overflow-hidden max-w-[70px] font-normal text-[14px] text-white leading-[16px] pb-[2px]">
          {item?.value}
        </p>
      </td>
    </tr>
  );

  return <table>{data?.map((item: TData) => renderLegend(item))}</table>;
};

export default ChartLegendMedium;
