'use client'
import React from "react";
import { motion } from "framer-motion";

const Info = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="bg-white shadow-xl rounded-xl p-8 mb-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
};

export default Info;
