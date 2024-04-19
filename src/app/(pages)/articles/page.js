import React from "react";
import Article from "@/components/Article/Article";

const Articles = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  px-3 mx-auto bg-red-300 py-20  ">
      <Article />
    </div>
  );
};

export default Articles;
