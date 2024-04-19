"use client";
import { useArticles } from "@/contexts/ArticlesContext/ArticlesContext";
import { motion } from "framer-motion"; // استيراد framer motion
import Image from "next/image";
import { useEffect, useState } from "react";

const ArticleDetails = () => {
  const { articlesData } = useArticles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataJsx = articlesData.map((article) => (
      <motion.div // استخدام motion.div بدلاً من div لتطبيق التأثير
        className="p-1 overflow-hidden"
        key={article.id}
        initial={{ opacity: 0 }} // الشفافية الأولية 0 للظهور الأولي بدون رؤية
        animate={{ opacity: 1 }} // الشفافية 1 للظهور بتأثير fadeIn
        transition={{ duration: 0.3 }} // مدة الانتقال
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
        <div className="p-4 divide-y-2 divide-gray-100">
          <motion.h1 // استخدام motion.h1 بدلاً من h1
            className="font-bold text-3xl max-sm:text-lg mb-2"
            initial={{ opacity: 0 }} // تأثير الشفافية الأولي للنص
            animate={{ opacity: 1 }} // تأثير الشفافية لظهور النص
            transition={{ delay: 0.2, duration: 0.5 }} // تأخير الظهور ومدة الانتقال
          >
            {article.title}
          </motion.h1>
          <motion.p // استخدام motion.p بدلاً من p
            className="text-zinc-800 leading-8 gap-8 py-3 text-justify columns-3 max-md:columns-2 max-sm:columns-1 text-lg"
            initial={{ opacity: 0, y: 20 }} // تأثير الشفافية والانزلاق للأسفل بداية
            animate={{ opacity: 1, y: 0 }} // تأثير الشفافية والانزلاق للأعلى للظهور
            transition={{ delay: 0.4, duration: 0.5 }} // تأخير الظهور ومدة الانتقال
          >
            {article.content}
          </motion.p>
        </div>
      </motion.div>
    ));

    setData(dataJsx);
  }, [articlesData]);

  return <>{data}</>;
};

export default ArticleDetails;
