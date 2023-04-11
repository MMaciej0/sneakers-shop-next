'use client';

import Search from './Search';

const MiddleMenu = () => {
  return (
    <>
      <div className="flex">
        <div className="cursor-pointer p-4 lg:px-8 border-r-[2px] text-xl font-light hover:text-highlight transition">
          Man
        </div>
        <div className="cursor-pointer p-4 lg:px-8 text-xl font-light hover:text-highlight transition">
          Woman
        </div>
      </div>
      <Search />
    </>
  );
};

export default MiddleMenu;
