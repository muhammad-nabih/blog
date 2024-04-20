"use client";
import React from "react";
import Article from "@/components/Article/Article";
import { motion } from "framer-motion"; // استيراد motion من Framer Motion
import TitleSection from "@/components/TitleSection/TitleSection";

const Articles = () => {
  return (
    <>
      <TitleSection firstPiece={"صفحة"} secondPiece={"المقالات"} />
      <Article />
    </>
  );
};

export default Articles;
