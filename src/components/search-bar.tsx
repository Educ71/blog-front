import React from 'react';
import { SearchIcon } from './search-icon';

export const SearchBar = () => {
  return (
    <div className="flex bg-gray-100 p-2 flex-grow max-w-screen-sm mx-auto border rounded-md hover:border-pink-900 focus-within:ring-2 focus-within:ring-pink-900">
      <SearchIcon />
      <input
        className="flex-grow bg-gray-100 focus:outline-none"
        placeholder="Search in LireReddit"
      />
    </div>
  );
};
