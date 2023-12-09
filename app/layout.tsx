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
//       <head />
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



// Import required modules
import React from "react";
// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

// Define the RootLayout component
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
    <>
      {/* Head component for metadata */}
      {/* <Head> */}
        {/* Add your head metadata here */}
      {/* </Head> */}

      {/* Body component with ThemeProvider, Navbar, children, and Footer */}
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </>
    </html>
  );
};

export default RootLayout;








{/* import necessary components and modules 
 import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar'; // Update the import path
import Footer from '@/components/Footer'; // Update the import path
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
} */}

