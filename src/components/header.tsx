import NextLink from 'next/link';
import React from 'react';
import { DropDownUserMenu } from './drop-down-menu';
import { SearchBar } from './search-bar';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center bg-white p-1.5 px-4 z-10 font-semibold text-pink-900 shadow-md">
      <NextLink href="/">
        <a className="text-2xl">LireReddit</a>
      </NextLink>
      <div className="mr-3" />

      <SearchBar />
      <div className="mr-3" />

      <NextLink href="/login">
        <a>Login</a>
      </NextLink>
      <div className="mr-3" />

      <NextLink href="/register">
        <a>Register</a>
      </NextLink>
      <div className="mr-3" />

      <DropDownUserMenu />
    </div>
  );
};
