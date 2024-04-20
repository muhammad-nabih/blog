"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { Button, Avatar } from "flowbite-react";
import TitleSection from "../TitleSection/TitleSection";

const AboutUs = () => {
  const students = [
    {
      name: "د.زكريا",
      image: "/dr_zakria.png",
      jobTitle: " المشرف ",

      info: "القائم علي المشروع وعلي مراجعة جميع النقاط والمسئول عن ظهور المدونة باعلي جودة والقائم علي ترتيب الافكار ورفع الروح المعنوية للفريق ",
    },
    {
      name: "هشام",
      image: "/hesham.png",
      jobTitle: "قائد الفريق",
      info: "القائم علي ادارة الفريق والمسئول عن الجزء الخاص بالواجهة الامامية للمشروع ",
    },
    {
      name: "أحمد ",
      image: "/ahmed.png",
      jobTitle: "قائم علي الواجهة الامامية",
      info: "مطورة واجهة أمامية تتخصص في إنشاء تجارب مستخدم جذابة ومبتكرة باستخدام مكتبات وأطر عمل مثل React وFramer Motion.",
    },
    {
      name: "وفاء",
      image: "/wafaa.png",
      jobTitle: "الجزء الخلفي من الموقع",
      info: "مطورة لوحة معلومات تعمل على تصميم وتطوير واجهات مستخدم مبتكرة لعرض البيانات والإحصاءات باستخدام تقنيات مثل  , server side",
    },
    {
      name: "هبه",
      image: "/heba.png",
      jobTitle: "الجزء الخلفي من الموقع",
      info: "مطور خلفي متخصص في تطوير وصيانة خوادم الويب والتطبيقات باستخدام لغات البرمجة مثل Node.js وقواعد البيانات مثل Array.",
    },
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleClick = (student) => {
    setSelectedStudent(student);
  };

  const handleClose = () => {
    setSelectedStudent(null);
  };

  return (
    <>
      <div className="container mx-auto  w-11/12 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 w-full lg:grid-cols-3 gap-y-8 text-center min-h-screen max-sm:pb-16">
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center max-sm:size-32 mx-auto my-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleClick(student)}
            >
              <motion.img
                src={student.image}
                alt={student.name}
                className="w-44 h-44 rounded-full mb-2 border-2 border-purple-700 shadow-2xl duration-300 cursor-pointer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              <p className="text-lg font-semibold ">{student.name}</p>
              <p className="text-sm max-md:text-xs">{student.jobTitle}</p>
            </motion.div>
          ))}
        </div>
        {selectedStudent && (
          <motion.div
            className="fixed top-0 left-0 w-full  h-full bg-black z-50 bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-zinc-100 text-gray-950 w-6/12 flex flex-col justify-center  max-lg:w-8/12  p-8 rounded-lg "
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <h2
                className="text-xl font-semibold mb-2 flex items-center
               "
              >
                <Avatar img={selectedStudent.image} rounded>
                  <div className="space-y-1 font-medium dark:text-white ">
                    <div className="font-extrabold text-sky-900">
                      {" "}
                      {selectedStudent.name}{" "}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedStudent.jobTitle}
                    </div>
                  </div>
                </Avatar>
              </h2>

              <p className="text-lg mb-4 text-gray-600 ">
                {selectedStudent.info}
              </p>
              <Button
                outline
                gradientDuoTone="purpleToBlue"
                onClick={handleClose}
              >
                <div className="flex items-center gap-2 font-bold">
                  <span> إغلاق</span>
                  <IoCloseSharp fontSize={30} />
                </div>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AboutUs;
