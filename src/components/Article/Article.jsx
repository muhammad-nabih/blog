"use client";
import { useArticles } from "@/contexts/ArticlesContext/ArticlesContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Article = () => {
  const { articlesData } = useArticles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataJsx = articlesData.map((article) => (
      <Link key={article.id} href={`articles/${article.id}`}>
        <div className="bg-gray-950 text-white rounded-md shadow-lg p-1 overflow-hidden ">
          <div className="relative h-52">
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="p-4 divide-y-2 divide-gray-100">
            <h1 className="font-bold text-xl mb-2 line-clamp-1">
              {article.title}
            </h1>
            <p className="text-zinc-300 py-1 line-clamp-3">{article.content}</p>
          </div>
        </div>
      </Link>
    ));

    setData(dataJsx);
  }, [articlesData]);

  return <>{data}</>;
};

export default Article;
