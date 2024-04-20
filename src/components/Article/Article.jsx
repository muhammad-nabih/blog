"use client";
import { useArticles } from "@/contexts/ArticlesContext/ArticlesContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
const Article = () => {
  const path = useParams();

  const { articlesData } = useArticles();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(path);
    const dataJsx = articlesData.map((article) => (
      <Link key={article.id} href={`articles/${article.id}`}>
        <div className=" bg-zinc-100 border border-1 border-zinc-600 rounded-lg shadow-xl p-1 overflow-hidden ">
          <div className="relative h-44">
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 divide-y-2 divide-gray-100">
            <h1 className="font-bold text-lg mb-2 text-black line-clamp-1">
              {article.title}
            </h1>
            <p className="text-zinc-700 text-md py-1 line-clamp-3">
              {article.content}
            </p>
          </div>
        </div>
      </Link>
    ));

    setData(dataJsx);
  }, [articlesData, path]);

  return <>{data}</>;
};

export default Article;
