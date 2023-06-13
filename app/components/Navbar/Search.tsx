'use client';

import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <label className="cursor-pointer w-full flex items-center bg-highlight/50 rounded-full px-4 py-2">
      <AiOutlineSearch size={25} className="mr-6" />
      <input
        type="text"
        className="bg-transparent outline-none"
        placeholder="Find your sneakers..."
      />
    </label>
  );
};

export default Search;
