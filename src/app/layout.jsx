
import Navbar from "@/components/Navbar/navbar.jsx";
import "./globals.css";

import React from "react";
import Footer from "@/components/Navbar/footer/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
       
      </body>
    </html>
  );
}
