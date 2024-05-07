import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";
import SignUp from "../components/SignUp";

function Allbooks() {
  return (
    <>
      <div className="dark:bg-slate-900">.</div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className=" min-h-screen">
          <Course />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Allbooks;
