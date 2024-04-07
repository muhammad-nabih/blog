"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar_Component() {
  const pathname = usePathname();

  return (
    <Navbar fluid className="bg-gray-900 text-white sticky top-0 z-50">
      <Navbar.Brand href="/">
        <Image
          width={50}
          height={50}
          src="/logo.png"
          className=" aspect-square"
          alt=" Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          BRAINBlOG
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
          href="/"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className={`${styles.link} ${
            pathname === "/about" ? styles.active : ""
          }`}
          href="/about"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          className={`${styles.link} ${
            pathname === "/services" ? styles.active : ""
          }`}
          href="/services"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          className={`${styles.link} ${
            pathname === "/contact" ? styles.active : ""
          }`}
          href="/contact"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
