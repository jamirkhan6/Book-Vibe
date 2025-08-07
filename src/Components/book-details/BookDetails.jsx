import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = () => {

    const {id} = useParams();
    
    const [selectedBook, setselectedBook] = useState(null);

    useEffect(() => {
      fetch('/booksData.json')
        .then((res) => res.json())
        .then((data) => {
        const matces = data.find((book) => book.bookId.toString() === id);
        setselectedBook(matces)
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, [id]);


  return (
    <>
      {selectedBook ? (
        <div className="grid grid-cols-2 gap-12 mt-6">
          <div className="p-20 flex items-center justify-center rounded-3xl bg-[#1313130D]">
            <img src={selectedBook.image} alt={selectedBook.bookName} />
          </div>
          <div>
            <h1 className="text-5xl font-bold font-displayall mb-6">
              {selectedBook.bookName}
            </h1>
            <h3 className="text-[20px] font-medium mb-5">
              By : {selectedBook.author}
            </h3>
            <div className="w-full h-0.5 bg-[#1313130D] mb-3"></div>
            <h3 className="text-[20px] font-medium mb-3">
              {selectedBook.category}
            </h3>
            <div className="w-full h-0.5 bg-[#1313130D] mb-5"></div>
            <p className="text-base text-[#131313B3] mb-5">
              <strong className="text-[#131313]">Review :</strong>{" "}
              {selectedBook.review}
            </p>
            <div className="flex items-center gap-6 mb-5">
              <h3 className="text-md font-medium">Tag</h3>
              {selectedBook.tags.map((tag, i) => (
                <h3
                  key={i}
                  className="px-4 py-2 bg-[#23BE0A0D] text-md font-medium rounded-3xl"
                >
                  #{tag}
                </h3>
              ))}
            </div>
            <div className="w-full h-0.5 bg-[#1313130D] mb-5"></div>
            <div className="flex gap-20 mb-5">
              <div>
                <h4 className="text-base font-normal text-[#131313B3] mb-4">
                  Number of Pages:
                </h4>
                <h4 className="text-base font-normal text-[#131313B3] mb-4">
                  Publisher:
                </h4>
                <h4 className="text-base font-normal text-[#131313B3] mb-4">
                  Year of Publishing:
                </h4>
                <h4 className="text-base font-normal text-[#131313B3] ">
                  Rating:
                </h4>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#131313] mb-4">
                  {selectedBook.totalPages}
                </h4>
                <h4 className="text-base font-semibold text-[#131313] mb-4">
                  {selectedBook.publisher}
                </h4>
                <h4 className="text-base font-semibold text-[#131313] mb-4">
                  {selectedBook.yearOfPublishing}
                </h4>
                <h4 className="text-base font-semibold text-[#131313] ">
                  {selectedBook.rating}
                </h4>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-5 py-3 rounded-md text-md font-semibold border-2 border-[#1313134D]">
                Read
              </button>
              <button className="px-5 py-3 rounded-md text-md font-semibold text-white bg-[#50B1C9]">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl mt-10">Loading book details...</p>
      )}
    </>
  );
}

export default BookDetails
