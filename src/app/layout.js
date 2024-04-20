import { Alexandria } from "next/font/google";
import "./globals.css";
import Navbar_Component from "@/components/Navbar/Navbar";
import { ArticlesProvider } from "@/contexts/ArticlesContext/ArticlesContext";
import Footer from "@/components/Footer/Footer";
const alexandria = Alexandria({ subsets: ["arabic"] });

export const metadata = {
  title: "Blogger",
  description: " Blogger Brain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alexandria.className}>
        <ArticlesProvider>
          <Navbar_Component />
          <div dir="rtl"> {children}</div>

        </ArticlesProvider>
      </body>
    </html>
  );
}
