import Info from "@/components/Info/Info";
import React from "react";
import { dataIt } from "./data";
const page = () => {
  const dataJsx = dataIt.map((data) => {
    return (
      <div key={data.id}>
        <Info title={data.title} desc={data.desc} />
      </div>
    );
  });
  return dataJsx;
};

export default page;
