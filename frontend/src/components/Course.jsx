import React from "react";

import Card from "./Card";
function Course({ list }) {
  const data = list.filter((item) => item.category != "Free");
  console.log(data);
  return (
    <>
      <div>
        <div className="mt-40 text-center space-y-8 shadow p-4 hover:bg-base-200 hover:dark:bg-slate-900 hover:dark:text-whie">
          <h1 className="text-4xl font-semibold">
            We are delighted to have you{" "}
            <span className="text-pink-500"> here !!</span>
          </h1>
          <p className="text-center text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            temporibus obcaecati nam ducimus nisi, voluptas delectus harum,
            quibusdam dolorem illum odit iusto sit architecto ex recusandae.
            Velit possimus ipsam at?
          </p>
        </div>
        <div className="mt-10 text-4xl font-bold ">All BOOKS</div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
