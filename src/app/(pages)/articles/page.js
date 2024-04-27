"use client";
import React from "react";
import Article from "@/components/Article/Article";
import { motion } from "framer-motion"; // استيراد motion من Framer Motion
import TitleSection from "@/components/TitleSection/TitleSection";
import Footer from "@/components/Footer/Footer";

const Articles = () => {
  return (
    <>
      <TitleSection firstPiece={"صفحة"} secondPiece={"المقالات"} />
      <div className="min-h-screen">
        <Article />
      </div>
      <Footer />
    </>
  );
};

export default Articles;
