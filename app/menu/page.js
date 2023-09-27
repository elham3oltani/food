import React from "react";
import MenuPage from "../components/template/MenuPage";

export default async function page() {
  const getDataFood = await getData();
  return <MenuPage data={getDataFood} />;
}

export async function getData() {
  const res = await fetch(`${process.env.BASE_URL }/data`, {
    nex: { revalidate: 10 },
  });
  const data = res.json();
  return data;
}
