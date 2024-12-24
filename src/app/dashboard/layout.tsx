import React from 'react';
import Header from '../../../public/components/Header';

export default function RootLayout({ children }) {
  return (
    <>
      {/* Set language for the document */}
      <div lang="en">
        <Header />
        <main className="">
          {children}
        </main>
      </div>
    </>
  );
}
