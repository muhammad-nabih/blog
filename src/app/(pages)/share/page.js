import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import TitleSection from "@/components/TitleSection/TitleSection";
import CommentSection from "@/components/comment/CommentSection";

const Share = () => {
  return (
    <>
      <Landing />
      <TitleSection firstPiece={"قسم"} secondPiece={"مشاركة الاراء"} />
      <CommentSection />
      <Footer />
    </>
  );
};

export default Share;
