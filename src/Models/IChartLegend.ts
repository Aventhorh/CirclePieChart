import { TData } from "../Types/TData";

export interface IChartLegend {
  data: Array<TData>;
  state: string;
}

export interface IChartLegendChildren {
  data: Array<TData>;
}
