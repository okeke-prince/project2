// 'use client'
import React, { Children } from 'react'
import Header from '../../../public/components/Header'
import SideBar from '../../../public/components/SideBar'



type Props = {}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" d-flex px-5 min-vh-100">
        <SideBar />

        <div className=" w-100 ">
          <Header />
          {children}

        </div>


      </body>
    </html>
  )
}

// export default layout