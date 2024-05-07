import React, { useState } from "react";

function Card({ item }) {
  return (
    <>
      <div className="mt-10 mb-10 card w-[325px] h-75 bg-base-100 shadow-xl hover:scale-105 dark:border duration-200">
        <figure>
          <img src={item.img} alt="Shoes" />
        </figure>

        <div className="card-body  dark:text-white dark:bg-slate-900">
          <div className="badge badge-secondary">{item.category}</div>
          <h2 className="card-title">{item.name}</h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between items-center">
            <div className=" text-xl badge p-4">₹ {item.price}</div>

            <div className="border  bg-black text-white rounded-lg px-4 py-2 hover:bg-slate-800 cursor-pointer">
              {item.category === "Free" ? "View Book" : "Purchase"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
