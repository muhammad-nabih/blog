"use client";
import { useArticles } from "@/contexts/ArticlesContext/ArticlesContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion"; // استيراد motion من Framer Motion
import CommentSection from "../comment/CommentSection";

const Article = () => {
  const path = useParams();

  const { articlesData } = useArticles();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(path);
    const dataJsx = articlesData.map((article) => (
      <Link key={article.id} href={`articles/${article.id}`}>
        <motion.div
          key={article.id}
          className=" bg-zinc-100 border border-1 border-zinc-600 rounded-lg shadow-xl p-1 overflow-hidden"
          initial={{ opacity: 0, y: 20 }} // تأثير البداية: الكارت غير مرئي ومتحرك باتجاه الأسفل بقيمة 20px
          animate={{ opacity: 1, y: 0 }} // تأثير الظهور: زيادة الشفافية وعودة الكارت إلى موضعه الطبيعي
          transition={{ duration: 0.5, delay: 0.1 }} // مدة التأثير وتأخير بدايته
          whileHover={{ scale: 1.03 }} // تأثير عند تحويل الماوس فوق الكارت
          whileTap={{ scale: 0.92 }} // تأثير عند النقر على الكارت
        >
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
        </motion.div>
      </Link>
    ));

    setData(dataJsx);
  }, [articlesData, path]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 gap-4  px-3 mx-auto container py-8  ">
        {data}
      </div>
    </>
  );
};

export default Article;
