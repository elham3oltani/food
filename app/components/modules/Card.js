import Link from "next/link";
import React from "react";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

const Card = (props) => {
  const { id, name, details, price, discount } = props;

  return (
    <div className="flex flex-col w-[270px] shadow-lg mb-10 rounded-md relative mx-auto ">
      <img
        src={`/images/${id}.jpeg`}
        alt={name}
        className="w-full rounded-sm"
      />
      <div className="flex align-baseline px-2 justify-between text-slate-400 text-md my-4">
        <h4 className="text-[#53c60b] font-bold text-sm">{name}</h4>
        <div className="flex items-center ">
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className="flex items-center">
        <Dollar />
        {discount ? (
          <span className="flex items-center text-red-500">{(price * (100 - discount)) / 100}</span>
        ) : (
          <span>{price} $</span>
        )}
        {discount ? <p className="bg-red-700 text-white p-1 rounded-md absolute left-2 top-2">{discount}%</p> : null}
      </div>
      <Link href={`/menu/${id}`} className="bg-[#53c60b]  text-white mt-5 py-1 mx-2 my-2 text-center block rounded-md ">See Details</Link>
    </div>
  );
};

export default Card;
