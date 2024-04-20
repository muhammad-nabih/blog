"use client";
import ContactUs from "@/components/ContactUs/ContactUs";
import TitleSection from "@/components/TitleSection/TitleSection";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <TitleSection firstPiece={"صفحة "} secondPiece={"تواصل معنا"} />
      <ContactUs />
    </>
  );
}
