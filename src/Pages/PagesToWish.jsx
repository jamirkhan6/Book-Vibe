import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../user context/UserContext";

const PagesToWish = () => {
  const { wishlistBooks } = useContext(UserContext);

  if (!wishlistBooks || wishlistBooks.length === 0) {
    return <p className="text-center p-6">No books read yet.</p>;
  }

  return (
    <>
      {wishlistBooks.map((book) => (
        <div
          key={book.bookId}
          className="flex gap-8 w-full p-6 rounded-3xl border-2 border-[#13131326] mb-6"
        >
          {/* Book image */}
          <div className="p-6 w-[230px] rounded-2xl bg-[#13131326] flex items-center justify-center">
            <img src={book.image || "/img/kindpng.png"} alt={book.bookName} />
          </div>

          {/* Book content */}
          <div className="w-full">
            {/* Title */}
            <h3 className="text-2xl font-semibold">{book.bookName}</h3>

            {/* Author */}
            <h4 className="text-base font-medium mt-4">
              {book.author || "Unknown Author"}
            </h4>

            {/* Tags */}
            {book.tags && book.tags.length > 0 && (
              <div className="flex items-center mt-4">
                <p className="text-base font-semibold">Tags:</p>
                {book.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] py-2 px-4 ml-4 rounded-3xl"
                  >
                    #{tag}
                  </p>
                ))}
                <p className="text-base font-normal ml-6 flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {book.publisher || "Unknown Publisher"}
                </p>
              </div>
            )}

            {/* Publisher & Pages */}
            <div className="flex gap-6 mt-4">
              <p className="text-base font-normal flex items-center gap-2">
                <FontAwesomeIcon icon={faUserGroup} />
                {book.author || "Unknown Author"}
              </p>
              <p className="text-base font-normal flex items-center gap-2">
                <FontAwesomeIcon icon={faFileLines} />
                {book.totalPages
                  ? `Pages: ${book.totalPages}`
                  : "Page count unavailable"}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-[#1313130D] mb-5 mt-4"></div>

            {/* Category, Rating, View Details */}
            <div className="flex gap-6 mt-4">
              <p className="text-base font-normal py-2 px-4 rounded-4xl text-center text-[#328EFF] bg-[#328EFF26]">
                {book.category || "Uncategorized"}
              </p>
              <p className="text-base font-normal py-2 px-4 rounded-4xl text-center text-[#328EFF] bg-[#328EFF26]">
                {book.rating || "No rating"}
              </p>
              <p className="text-base font-normal py-2 px-4 rounded-4xl text-center text-[#328EFF] bg-[#328EFF26] cursor-pointer">
                View Details
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PagesToWish;
