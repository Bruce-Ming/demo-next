import React from 'react'
type Component = { children: React.ReactNode }

export default function Layout({ children }: Component) {
  return (
    <div>
      <div>测试</div>
      {children}
    </div>
  )
}
