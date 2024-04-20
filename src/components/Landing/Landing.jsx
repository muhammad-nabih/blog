"use client";
import React from "react";
import styles from "./Landing.module.css";
import { Carousel } from "flowbite-react";
import "./landing.css";

const carouselData = [
  {
    backgroundImage: "/landing1.jpg",
    title: "مدونتنا تحتوي على الأفكار المبتكرة",
    description:
      "تعتبر الأفكار المبتكرة أساس تطور المجتمع والتقدم العلمي والتكنولوجي، وفي هذا القسم، سنستكشف مجموعة متنوعة من الأفكار ونتحدث عن أهميتها وتأثيرها.",
  },
  {
    backgroundImage: "/landing2.jpg",
    title: "مدونتنا تحتوي على المواضيع المتنوعة",
    description:
      "تتنوع المواضيع التي يمكن مناقشتها واستكشافها، فتشمل مجموعة واسعة من المجالات مثل التكنولوجيا والثقافة والعلوم وغيرها، في هذا القسم، سنستعرض مواضيع متنوعة وشيقة.",
  },
  {
    backgroundImage: "/landing3.jpg",
    title: "مدونتنا تحتوي على المواضيع الحديثة والذكاء الاصطناعي",
    description:
      "تطورت التكنولوجيا بشكل كبير في السنوات الأخيرة، ومن بين التقنيات المثيرة للجدل هو الذكاء الاصطناعي. في هذا القسم، سنستكشف أحدث المواضيع والتطورات في عالم الذكاء الاصطناعي.",
  },
];

function Landing() {
  return (
    <div dir="ltr" className={styles.landing}>
      <Carousel>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`flex h-full items-center justify-center dark:bg-gray-700 dark:text-white`}
            style={{
              backgroundImage: `url("${item.backgroundImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              backgroundColor: "#8101a456",
            }}
          >
            <div className={styles.box}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.description}</p>
              <a href="https://chat.openai.com/">
                <button class="relative inline-flex my-8 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    الذهاب لروبوت الدردشة
                  </span>
                </button>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Landing;
