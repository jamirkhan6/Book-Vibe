import React from 'react'

const SuggestBook = () => {
  return (
    <>
      {/* suggest book main picture */}
      <div className="flex items-center justify-between mt-12 py-20 px-32 rounded-3xl bg-[#1313130D]">
        <div className='w-1/2'>
          <h1 className="text-7xl font-bold leading-20 font-displayall">Books to freshen up your bookshelf</h1>
          <button className="px-7 py-5 mt-12 text-xl font-bold text-white rounded-xl bg-[#23BE0A]">View The List</button>
        </div>
        <div>
          <img src="/img/pngwing 2.png" alt="" />
        </div>
      </div>
      {/* suggest book list */}
    </>
  );
}

export default SuggestBook

