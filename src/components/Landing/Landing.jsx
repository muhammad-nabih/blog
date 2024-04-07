"use client";
import styles from "./Landing.module.css";
import { Carousel } from "flowbite-react";
import "./landing.css";
function Landing() {
  return (
    <div className={styles.landing}>
      <Carousel>
        <div
          className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white"
          style={{
            backgroundImage: `url("/landing1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "#8101a456",
          }}
        >
          <div className={styles.box}>
            <h2 className={styles.title}>مدونتنا تحتوي علي الأفكار المبتكرة</h2>
            <p className={styles.desc}>
              تعتبر الأفكار المبتكرة أساس تطور المجتمع والتقدم العلمي
              والتكنولوجي,وفي هذا القسم، سنستكشف مجموعة متنوعة من الأفكار ونتحدث
              عن أهميتها وتأثيرها.
            </p>
          </div>
        </div>
        <div
          className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white"
          style={{
            backgroundImage: `url("/landing2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "#8101a456",
          }}
        >
          {" "}
          <div className={styles.box}>
            <h2 className={styles.title}>
              مدونتنا تحتوي علي المواضيع المتنوعة
            </h2>
            <p className={styles.desc}>
              تتنوع المواضيع التي يمكن مناقشتها واستكشافها، فتشمل مجموعة واسعة
              من المجالات مثل التكنولوجيا والثقافة والعلوم وغيرها, في هذا القسم،
              سنستعرض مواضيع متنوعة وشيقة.
            </p>
          </div>
        </div>
        <div
          className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white"
          style={{
            backgroundImage: `url("/landing3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "#8101a456",
          }}
        >
          <div className={styles.box}>
            <h2 className={styles.title}>
              مدونتنا تحتوي علي المواضيع الحديثة والذكاء الاصطناعي
            </h2>
            <p className={styles.desc}>
              تطورت التكنولوجيا بشكل كبير في السنوات الأخيرة، ومن بين التقنيات
              المثيرة للجدل هو الذكاء الاصطناعي. في هذا القسم، سنستكشف أحدث
              المواضيع والتطورات في عالم الذكاء الاصطناعي.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Landing;
