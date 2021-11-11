import React from 'react'
import { Header } from './header'
import { WrapperVariant, Wrapper } from './screen-wrapper'

interface LayoutProps {
  variant?: WrapperVariant
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <Wrapper variant={variant}>{children}</Wrapper>
    </div>
  )
}
