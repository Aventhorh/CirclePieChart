import React from "react";
import { CirclePieChart } from "./components";
import { data } from "./Data/Data";

const App = () => (
  <div className="bg-[#000] w-full h-full overflow-hidden flex flex-col justify-center items-center">
    <CirclePieChart data={data} state="large" />
    <CirclePieChart data={data} state="medium" />
    <CirclePieChart data={data} state="small" />
  </div>
);

export default App;
