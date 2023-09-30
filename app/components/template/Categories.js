"use client";
import React, { useState} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Card from "../modules/Card";
const Categories = ({data}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

  current.set("difficulty", query.difficulty);
  current.set("time", query.time);
  const search = current.toString();

  const queryHandler = () => {
    router.push(`${pathname}?${search}`);
  };

  return (
    <div className="mx-auto my-16">
      <h2 className="border-b-4 border-[#53c60b] ml-3 font-bold w-fit mb-[50px] text-2xl">
        Categories
      </h2>
      <div>
        <div className="flex-col lg:ml-3">
          <select
            value={query.difficulty}
            onChange={changeHandler}
            name="difficulty"
            className="border lg:w-[150px] text-sm mr-6  w-full h-[40px] lg:h-[40px] lg:mb-0 rounded-md px-1 mx-auto mb-2 text-[#48ac0a] shadow-lg"
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            value={query.time}
            onChange={changeHandler}
            name="time"
            className="border lg:w-[150px] w-full lg:h-[40px] h-[40px] text-sm mx-auto mb-2 rounded-md px-1  text-[#48ac0a] shadow-lg"
          >
            <option value="">Cooking Time</option>
            <option value="more">More Than 30 Min</option>
            <option value="less">Less Than 30 Min</option>
          </select>
          <button
            onClick={queryHandler}
            className="border-none h-[38px] outline-none lg:w-fit w-full py-1.5 px-4 lg:mx-4  bg-[#53c60b] text-white rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between mx-auto">
      {!data.length ? (
            <img src="/images/search.png" alt="Category" className="w-[250px] mx-auto mt-8" />
          ) : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
