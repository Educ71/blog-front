import React from 'react'

export type WrapperVariant = 'small' | 'regular'

interface WrapperProps {
  variant?: WrapperVariant
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="mt-8 h-auto w-full max-w-screen-md mx-auto">{children}</div>
}
