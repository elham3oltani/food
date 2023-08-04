"use client";
import Categories from "../components/template/Categories";

export default async function page({ searchParams }) {
  const difficulty = searchParams.difficulty;
  console.log(difficulty);
  const getDATA = await getDataFromQuery();

  const filteredData = getDATA.filter(item => {
    const difficulty = item.details.find(dif => {
        const key = Object.keys(dif)
        if (key.includes('Difficulty')) {
            return dif
        }
    })

    if (difficulty && difficulty['Difficulty'].toLowerCase() === difficulty.toLowerCase()) {
        return item;
    }
})
  console.log(filteredData);
  return (
    <div className="h-screen">
      <Categories />
    </div>
  );
}

async function getDataFromQuery() {
  const res = await fetch("http://localhost:4000/data");
  const data = res.json();
  return data;
}
