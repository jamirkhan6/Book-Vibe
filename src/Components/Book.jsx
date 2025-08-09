import React, { useEffect, useState } from 'react'
import axios from "axios";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import SuggestBook from './suggest book/SuggestBook';


const Book = () => {

  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch('/booksData.json')
  //   .then(res => res.json())
  //   .then(data => setBooks(data))
  //   .catch(error => console.error("Error fetching data:", error));
  // }, []);


  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("/booksData.json");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);



  const bookList = books.map(
    ({
      bookId,
      bookName,
      author,
      image,
      review,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing,
    }) => (
      <Link to={`/book/${bookId}`} key={bookId}>
        <div
          className="p-4 border-2 border-[#13131326] rounded-3xl"
          key={bookId}
        >
          {/* image */}
          <div className="w-full h-[300px] p-4 flex items-center justify-center rounded-2xl bg-[#F3F3F3]">
            <img src={image} alt={bookName} className="h-full object-contain" />
          </div>
          {/* tags */}
          <div className="mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block p-2 mr-3 rounded-4xl bg-[#23BE0A0D] text-[#23BE0A]"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* books name */}
          <h3 className="mt-4 text-2xl font-bold font-displayall text-[#131313]">
            {bookName}
          </h3>
          {/* author */}
          <p className="mt-2 text-base font-medium text-[#131313CC]">
            By : {author}
          </p>
          {/* line */}
          <hr className="my-2 mt-4 border-dashed border-[#13131326]" />
          {/* cetagory + rating */}
          <div className="flex justify-between mt-4 text-base font-medium text-[#131313CC]">
            <p>{category}</p>
            <p>
              {rating}
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </p>
          </div>
        </div>
      </Link>
    )
  );

  return (
    <>
      <SuggestBook />
      <h1 className="text-[40px] font-bold text-[#131313] text-center mt-12">Book</h1>
      <div className="grid grid-cols-4 gap-6 mt-4">{bookList}</div>
    </>
  );
}

export default Book
