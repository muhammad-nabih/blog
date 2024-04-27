import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 shadow dark:bg-gray-800 w-full mx-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            BRAINBLOG
          </a>
          . كل الحقوق محفوظة.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              حول
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              سياسة الخصوصية
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              التراخيص
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              اتصل بنا
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
