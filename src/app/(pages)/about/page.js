"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import TimelineComponent from "@/components/Timeline/Timeline";
import TitleSection from "@/components/TitleSection/TitleSection";

const About = () => {
  return (
    <>
      <TitleSection firstPiece={"صفحة "} secondPiece={"ماذا عنا "} />
      <AboutUs />
      <TimelineComponent />
    </>
  );
};

export default About;
