'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setData(JSON.parse(savedComments));
    }
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmitComment = () => {
    const currentDate = new Date().toLocaleString();
    const newComment = {
      user: user,
      text: comment,
      date: currentDate,
    };

    const updatedData = [...data, newComment];
    setData(updatedData);
    localStorage.setItem("comments", JSON.stringify(updatedData));
    localStorage.setItem("user", JSON.stringify(user));
    setComment("");
    setUser("");
  };

  return (
    <div className="w-10/12 container mx-auto my-5">
      <h2 className="font-bold text-lg mb-2 max-lg:text-lg max-md:text-md max-sm:text-xs text-justify">
        يمكنك التعبير عن أفكارك هنا ومشاركة كل ما يخطر في تفكيرك بحرية مطلقة :
      </h2>
      <div>
        <label
          htmlFor="user_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          اكتب اسمك
        </label>
        <input
          value={user}
          onChange={handleUserChange}
          type="text"
          id="user_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
          placeholder="محمد مثلا"
          required
        />
      </div>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        className="w-full h-24 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-purple-300"
        placeholder="اكتب ما تفكر به هنا ..."
      />
      <button
        onClick={handleSubmitComment}
        className="mt-2 px-4 py-2 bg-purple-900 w-full text-white rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-900"
      >
        مشاركة
      </button>

      {data.map((com, index) => {
        return (
          <div key={index} className="my-4 p-2 rounded-lg bg-purple-50">
            <div className="flex items-center gap-4 p-5">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="/man.png" alt="" width={40} height={40} />
              </div>
              <div>
                <div className="font-bold dark:text-white text-purple-600">
                  {com.user}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  تم التحرير في : {com.date}
                </div>
              </div>
            </div>
            <div className="px-4">{com.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
