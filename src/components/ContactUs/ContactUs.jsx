import React from "react";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <div className="py-2 px-4 mx-auto max-w-screen-md">
      <motion.p
        className="mb-4 font-light 
						text-gray-500 sm:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        هل لديك سؤال؟ هل ترغب في تقديم مقترح؟ هل تحتاج إلى مزيد من المعلومات؟ لا
        تتردد في الاتصال بنا.
      </motion.p>
      <form action="#">
        <motion.div
          className="flex flex-row gap-3 max-sm:flex-wrap "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className=" w-1/2 max-sm:w-full pr-2 ">
            <label
              for="firstName"
              className="block my-2 
										text-sm font-medium text-gray-900"
            >
              الاسم الأول
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-lg block w-full p-2.5"
              placeholder="أدخل الاسم الأول"
              required
            />
          </div>
          <div className=" w-1/2 max-sm:w-full  pl-2">
            <label
              for="lastName"
              className="block my-2 
										text-sm font-medium text-gray-900"
            >
              الاسم الأخير
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-lg block w-full p-2.5"
              placeholder="أدخل الاسم الأخير"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label
            for="email"
            className="block my-2 text-sm 
									font-medium text-gray-900"
          >
            بريدك الإلكتروني
          </label>
          <input
            type="email"
            className="shadow-sm bg-gray-50 border 
									border-gray-300 text-gray-900 
									text-sm rounded-lg block w-full p-2.5"
            placeholder="abc@geeksforgeeks.org"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label
            for="subject"
            className="block my-2 
									text-sm font-medium text-gray-900"
          >
            الموضوع
          </label>
          <input
            type="text"
            className="block p-3 w-full text-sm 
									text-gray-900 bg-gray-50 rounded-lg 
									border border-gray-300 shadow-sm "
            placeholder="ما هو استفسارك أو اقتراحك؟"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label
            for="message"
            className="block my-2 
									text-sm font-medium text-gray-900 "
          >
            رسالتك
          </label>
          <textarea
            rows="6"
            className="block p-2.5 w-full text-sm 
										text-gray-900 bg-gray-50 rounded-lg 
										shadow-sm border border-gray-300 "
            placeholder="اكتب استفسارك أو اقتراحك هنا..."
          />
        </motion.div>
        <motion.button
          type="submit"
          className="w-full my-5 bg-purple-800 py-4 px-6 rounded-lg text-white "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          إرسال الرسالة
        </motion.button>
      </form>
    </div>
  );
};

export default ContactUs;
