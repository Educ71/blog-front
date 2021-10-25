import NextLink from 'next/link'
import React from 'react'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="flex sticky top-0 bg-pink-900 p-4 z-10">
      <NextLink href="/">
        <a>
          <h1 className="text-4xl font-bold">LireReddit</h1>
        </a>
      </NextLink>
      <div className="ml-auto flex items-center font-semibold text-white ">
        <NextLink href="/login">
          <a>Login</a>
        </NextLink>
        <div className="mr-3" />
        <NextLink href="/register">
          <a>Register</a>
        </NextLink>
      </div>
    </div>
  )
}
