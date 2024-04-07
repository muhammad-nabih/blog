import { Alexandria } from "next/font/google";
import "./globals.css";
import Navbar_Component from "@/components/Navbar/Navbar";

const alexandria = Alexandria({ subsets: ["arabic"] });

export const metadata = {
  title: "Blogger",
  description: " Blogger Brain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alexandria.className}>
        <Navbar_Component />
        {children}
      </body>
    </html>
  );
}
