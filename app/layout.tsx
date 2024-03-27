"use client"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body 
      className="dark:bg-stone-900" 
      // className={inter.className}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



// Import necessary modules and components
// import { ThemeProvider } from "next-themes";
// import Head from "next/head";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ThemeProvider enableSystem={true} attribute="class">
//       {/* Use the Head component to manage the document head */}
//       <Head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         {/* Add other head elements as needed */}
//       </Head>
//       <div className="dark:bg-stone-900">
//         <Navbar />
//         {children}
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }



// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { ThemeProvider } from 'next-themes';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }): React.ReactElement {
//   return React.createElement('html', { lang: 'en' },
//     React.createElement('body', { className: 'dark:bg-stone-900' },
//       React.createElement(ThemeProvider, { enableSystem: true, attribute: 'class' },
//         React.createElement(Navbar),
//         children,
//         React.createElement(Footer)
//       )
//     )
//   );
// }
