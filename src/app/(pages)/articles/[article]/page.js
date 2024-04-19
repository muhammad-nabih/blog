"use client";
import CommentSection from "@/components/comment/CommentSection";
import { useArticles } from "@/contexts/ArticlesContext/ArticlesContext";
import { motion } from "framer-motion"; // استيراد framer motion
import Image from "next/image";
import { useEffect, useState } from "react";

const ArticleDetails = () => {
  const { articlesData } = useArticles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataJsx = articlesData.map((article) => (
      <motion.div
        className="p-1 overflow-hidden "
        key={article.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <div className="p-4 divide-y-2 divide-gray-100 my-8">
          <motion.h1 // استخدام motion.h1 بدلاً من h1
            className="font-bold text-3xl max-sm:text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {article.title}
          </motion.h1>
          <motion.p
            className=" p-2 leading-8 gap-8 tracking-wider  py-3 text-justify columns-3 max-md:columns-2 max-sm:columns-1 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {article.content}
          </motion.p>
        </div>
      </motion.div>
    ));

    setData(dataJsx);
  }, [articlesData]);

  return (
    <>
      <div className="container mx-auto my-6">{data}</div>
      <CommentSection />
    </>
  );
};

export default ArticleDetails;
