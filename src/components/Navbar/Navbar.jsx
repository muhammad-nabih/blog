"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import styles from "./Navbar.module.css";
// عنصر الروابط لشريط التنقل
const links = [
  { href: "/", text: "الصفحة الرئيسية" },
  { href: "/share", text: "مشاركة رأيك" },
  { href: "/articles", text: "المقالات" },
  { href: "/about", text: "ماذا عنا" },
  { href: "/contact", text: "تواصل معنا" }
];

// انشاء مكون شريط التنقل
export default function Navbar_Component() {
  // استخدام usePathname للحصول على مسار الصفحة الحالي
  const pathname = usePathname();

  // دالة لفحص ما إذا كانت الروابط نشطة أم لا
  const isActive = (path) => path === pathname ? styles.active : '';

  return (
    <Navbar fluid className={`${styles.navbar} bg-gray-900 text-white sticky top-0 z-50`} dir="rtl">
      {/* عنصر العلامة التجارية */}
      <Navbar.Brand href="/" className="flex items-center gap-1 px-3 ">
        <Image width={50} height={50} src="/logo.png" className="aspect-square" alt=" Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white text-purple-300">
          BRAINBlOG
        </span>
      </Navbar.Brand>

      {/* زر القائمة المنسدلة */}
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>

      {/* قائمة الروابط */}
      <Navbar.Collapse>
        {/* استخدام map لإنشاء الروابط */}
        {links.map(({ href, text }, index) => (
          <Navbar.Link key={index} className={`${styles.link} ${isActive(href)} md:mx-5`} href={href}>
            {text}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
