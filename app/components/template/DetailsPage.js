import React from "react";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

const DetailsPage = (props) => {
  const { id, name, details, recipe, introduction,ingredients, price, discount } = props;
  return (
    <div className="m-auto mt-[100px]">
      <h2 className="border-[#53c60b] border-b-4  w-fit mb-[40px] text-2xl text-bold">
        DetailFood
      </h2>
      <div>
        <div className="flex ">
          <img
            className="w-[300px] rounded-md"
            src={`/images/${id}.jpeg`}
            alt={name}
          />
          <div className="ml-8">
            <h3 className="text-[#53c60b] font-bold text-xl">{name}</h3>
            <span className="flex items-center text-gray-400 mt-8">
              <Location className=" mt-10 mr-0 mb-20" />
              <span>{details[0].Cuisine}</span>
            </span>
            <span className="flex items-center mt-8">
              <Dollar />
              <span>{discount ? (price * (100 - discount)) / 100 : price}$</span>
            </span>
            {discount ? <span className="bg-[#ed4133] justify-center rounded-md mt-[28px] text-white  py-1 flex ">{discount}$ OFF</span> : null}
          </div>
        </div>
        <div className="my-[60px] mx-0 text-justify">
          <p>{introduction}</p>
        </div>
        <div className="mb-[60px]">
          <h4 className="text-xl font-bold text-[#53c60b] my-[24px]">Detail</h4>
          <ul className="list-disc">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center my-[10px] mx-0 before:text-[#53c60b]">
                <p className="text-lg font-bold my-0 mx-[10px]">{Object.keys(detail)[0]}: </p>
                <span className="text-gray-400">{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-4">
          <h4 className="text-xl font-bold text-[#53c60b] my-[24px]">Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-center my-[10px] mx-0 before:text-[#53c60b]">
                <p className="text-lg font-bold my-0 mx-[10px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-20">
          <h4 className="text-xl my-8 font-bold text-[#53c60b] px-1">Recipe</h4>
          {recipe.map((item, index) => (
            <div key={index} className={index % 2 ? 'bg-[#e8ffdb] flex items-center' : 'bg-[#bcff93] flex items-center'}>
              <span className="text-[32px] mt-0 mr-[15px] mb-0 ml-[15px] ">{index + 1}</span>
              <p className="py-3">{item}</p>
            </div>
          ))}
        </div>
        <button className="w-full border-none bg-[#53c60b] text-white p-[15px] text-lg rounded-md cursor-pointer mb-[100px]">Add to Cart</button>
      </div>
    </div>
  );
};

export default DetailsPage;
