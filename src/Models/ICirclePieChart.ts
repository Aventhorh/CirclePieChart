import { TData } from "../Types/TData";

export interface ICirclePieChart {
  data: Array<TData>;
  state: string;
}

export interface ICirclePieChartChildren {
  data: Array<TData>;
}
