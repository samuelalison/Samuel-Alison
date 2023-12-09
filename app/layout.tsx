"use client"
import "../styles/globals.css"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"
// import { ThemeProvider } from "next-themes"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       {/* <head /> */}
//       <body className="dark:bg-stone-900">
//         <ThemeProvider enableSystem={true} attribute="class">
//           <Navbar />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return React.createElement('html', { lang: 'en' },
    React.createElement('body', { className: 'dark:bg-stone-900' },
      React.createElement(ThemeProvider, { enableSystem: true, attribute: 'class' },
        React.createElement(Navbar),
        children,
        React.createElement(Footer)
      )
    )
  );
}
