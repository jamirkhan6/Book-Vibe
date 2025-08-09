import React, { useContext, useState } from 'react'
import PagesToRead from './PagesToRead';
import PagesToWish from './PagesToWish';
import { UserContext } from '../user context/UserContext';

const ListedBook = () => {

  const {activeTag} = useContext(UserContext);
  console.log(activeTag);

  const [selectedCategory, setSelectedCategory] = useState("Default");





  return (
    <>
      <div className="w-full h-[100px] flex items-center justify-center text-[28px] font-semibold rounded-2xl mt-6 bg-[#1313130D]">
        Book
      </div>

      {/* category select */}
      <div className="flex justify-center mt-6">
        <div className="px-5 py-3 flex gap-2 rounded-xl text-[18px] font-normal text-white bg-[#23BE0A]">
          {/* <label htmlFor="">Sort By</label> */}
          <select
            name="Category"
            id="Category"
            className="outline-none "
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Default">All Categories</option>
            <option value="Classic">Classic</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
      </div>

      {/*  read book & wish book */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked={activeTag === "read"}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <PagesToRead />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked={activeTag === "wish"}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <PagesToWish />
        </div>
      </div>
    </>
  );
}

export default ListedBook



