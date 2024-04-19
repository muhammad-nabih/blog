import React from "react";
import Article from "@/components/Article/Article";

const Articles = () => {
  return (
    <>
      <h1 class="my-8 indent-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        صفحة
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">
          المقالات
        </span>{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  px-3 mx-auto container py-8  ">
        <Article />
      </div>{" "}
    </>
  );
};

export default Articles;
