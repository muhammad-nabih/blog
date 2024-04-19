"use client";
import React, { createContext, useContext, useState } from "react";
import { articles } from "@/Data/ArticlesData";
// إنشاء context
const ArticleContext = createContext();
const useArticles = () => useContext(ArticleContext);

// مقدم المقالات
const ArticlesProvider = ({ children }) => {
  // قراءة وتحديث حالة المقالات
  const [articlesData, setArticlesData] = useState(articles);

  return (
    <ArticleContext.Provider value={{ articlesData, setArticlesData }}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticlesProvider, useArticles };
