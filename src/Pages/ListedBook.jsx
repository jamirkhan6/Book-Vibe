import React from 'react'

const ListedBook = () => {
  return (
    <>
      <div className="w-full h-[100px] flex items-center justify-center text-[28px] font-semibold rounded-2xl mt-6 bg-[#1313130D]">
        Book
      </div>
      <div className="flex justify-center mt-6">
        <div className="px-5 py-3 flex gap-2 rounded-xl text-[18px] font-normal text-white bg-[#23BE0A]">
          {/* <label htmlFor="">Sort By</label> */}
          <select name="" id="">
            <option value="">Sort By</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>

      {/*  read book & wish book */}
      <div>

      </div>
    </>
  );
}

export default ListedBook
