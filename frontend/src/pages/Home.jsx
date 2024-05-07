import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBook from "../components/FreeBook";
import Footer from "../components/Footer";

function Home({ bookData }) {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <Navbar />
        <Banner />
        <FreeBook list={bookData} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
