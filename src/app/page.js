"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import Article from "@/components/Article/Article";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import TimelineComponent from "@/components/Timeline/Timeline";
import TitleSection from "@/components/TitleSection/TitleSection";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Landing />
      <TitleSection firstPiece={"قسم  "} secondPiece={"المقالات"} />
      <Article />
      <TitleSection firstPiece={"قسم  "} secondPiece={"ماذا عنا "} />
      <AboutUs />
      <TimelineComponent />
      <TitleSection firstPiece={"قسم"} secondPiece={"تواصل معنا "} />
      <ContactUs />

      <Footer />
    </>
  );
}
