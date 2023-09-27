
import Categories from "../components/template/Categories";

export default async function page({ searchParams }) {
  const timeItems = searchParams.time;
  const difficultyItem = searchParams.difficulty;
  console.log(timeItems);
  const getDATA = await getDataFromQuery();

  // const filteredData = getDATA.filter((item) => {
  //   const difficulty = item.details.find((dif) => {
  //     const key = Object.keys(dif);
  //     if (key.includes("Difficulty")) {
  //       return dif;
  //     }
  //   });

  //   if (difficulty && difficulty["Difficulty"] === difficultyItem) {
  //     return item;
  //   }
  // });

  const filteredData = getDATA.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficultyItem
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (timeItems === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (timeItems === "more" && +timeDetail > 30) {
        return detail;
      }
    });
    if (timeItems && difficultyItem && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!timeItems && difficultyItem && difficultyResult.length) {
      return item;
    } else if (timeItems && !difficultyItem && timeResult.length) {
      return item;
    }
  });
  console.log(filteredData);

  return (
    <div className="">
      <Categories data={filteredData} />
     </div>
  );
}

async function getDataFromQuery() {
  const res = await fetch(`${process.env.BASE_URL }/data`);
  const data = res.json();
  return data;
}
