import React from "react";
import BookImage from "../../public/BookImage.png";
function Banner() {
  return (
    <>
      <div className="flex md:flex-row flex-col  mb-24">
        <div className="md:w-1/2 w-full  md:order-1 order-2">
          <div className="space-y-8 text-center md:text-left md:mt-44 mt-10">
            <h4 className="font-bold md:text-4xl text-3xl ">
              Hello, Welcomes here to learn something
              <br className="md:hidden block" />
              <span className="text-pink-500"> new everyday !!</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit ipsa quo nobis dolorem rerum error ea voluptatibus
              iure impedit molestias!
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="bg-pink-500 hover:bg-pink-400 px-4 py-3 rounded-lg text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:order-2 order-1 md:mt-16 mt-10">
          <img src={BookImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
