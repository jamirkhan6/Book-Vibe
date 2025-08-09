import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTag, setActiveTag] = useState('read');

  const addToRead = (book) => {
      if (!readBooks.find((b) => b.bookId === book.bookId)) {
          setReadBooks([...readBooks, book]);
        }
    };
    
  const addToWishlist = (book) => {
    if (!wishlistBooks.find((b) => b.bookId === book.bookId)) {
      setWishlistBooks([...wishlistBooks, book]);
    }
  };

  return (
    <UserContext.Provider
      value={{ readBooks, wishlistBooks, addToRead, addToWishlist, activeTag, setActiveTag }}
    >
      {children}
    </UserContext.Provider>
  );
};
