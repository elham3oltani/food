"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getPriceQueryParams } from "@/app/helper/helper";
const Categories = () => {
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
    <div className="m-auto mt-[100px] my-20 max-h-[1200px]">
      <h2 className="border-b-4 border-[#53c60b] font-bold w-fit mb-[50px] text-2xl">
        Categories
      </h2>
      <div>
        <div>
          <select
            value={query.difficulty}
            onChange={changeHandler}
            name="difficulty"
            className="border w-[150px] text-sm h-[40px] rounded-md px-1  text-[#48ac0a] shadow-lg"
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
            className="border w-[150px] h-[40px] text-sm rounded-md px-1 mx-6 text-[#48ac0a] shadow-lg"
          >
            <option value="">Cooking Time</option>
            <option value="more">More Than 30 Min</option>
            <option value="less">Less Than 30 Min</option>
          </select>
          <button
            onClick={queryHandler}
            className="border-none py-1.5 px-4 bg-[#53c60b] text-white rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
