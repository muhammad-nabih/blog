import Footer from "@/components/Footer/Footer";
import TitleSection from "@/components/TitleSection/TitleSection";
import CommentSection from "@/components/comment/CommentSection";

const Share = () => {
  return (
    <>
      <TitleSection firstPiece={"قسم"} secondPiece={"مشاركة الاراء"} />
      <div className="min-h-screen">

      <CommentSection />
      </div>
      <Footer />
    </>
  );
};

export default Share;
