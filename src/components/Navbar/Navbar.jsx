"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar_Component() {
  const pathname = usePathname();

  return (
    <Navbar
      fluid
      className="bg-gray-900 text-white sticky top-0 z-50"
      dir="rtl"
    >
      <Navbar.Brand href="/" className="flex items-center gap-1 px-3 ">
        <Image
          width={50}
          height={50}
          src="/logo.png"
          className=" aspect-square"
          alt=" Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white text-purple-300">
          BRAINBlOG
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className={`${styles.link} md:mx-5  ${
            pathname === "/" ? styles.active : ""
          }`}
          href="/"
        >
          الصفحة الرئيسية
        </Navbar.Link>

        <Navbar.Link
          className={`${styles.link} ${
            pathname === "/share" ? styles.active : ""
          }`}
          href="/share"
        >
          مشاركة رأيك
        </Navbar.Link>

        <Navbar.Link
          className={`${styles.link} ${
            pathname === "/articles" ? styles.active : ""
          }`}
          href="/articles"
        >
          المقالات
        </Navbar.Link>

        <Navbar.Link
          className={`${styles.link} ${
            pathname === "/about" ? styles.active : ""
          }`}
          href="/about"
        >
          ماذا عنا
        </Navbar.Link>
        <Navbar.Link
          className={`${styles.link} ${
            pathname === "/contact" ? styles.active : ""
          }`}
          href="/contact"
        >
          تواصل معنا
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
