import React, { Children } from 'react'
import Header from '../../../public/components/Header' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../../../public/components/Login';



type Props = {}

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body >
          {/* <Login></Login> */}
          <main className='d-flex justify-center'><div className='border-3 d-flex w-100 h-100'>{children}</div></main>
        </body>
      </html>
    )
  }