import React from "react";
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import ListedBook from "./Pages/ListedBook";
import PagesToRead from "./Pages/PagesToRead";
import BookDetails from "./Components/book-details/BookDetails";
import Book from "./Components/Book";
import RootLayout from "./Components/leyout/RootLayout";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Book />} />
        <Route path="/listedBook" element={<ListedBook />} />
        <Route path="/pagesToRead" element={<PagesToRead />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
