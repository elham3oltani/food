import DetailsPage from "@/app/components/template/DetailsPage";
export default async function Detail({ params: { idFood } }) {
  const data = await getDataFood(idFood);
  return (
<DetailsPage {...data} />
  );
}

export async function getDataFood(idFood) {
  const res = await fetch(`${process.env.BASE_URL }/data/${idFood}`);
  return res.json();
}
export async function generateStaticParams() {
  const res = await fetch(`${process.env.BASE_URL }/data`).then((res) =>
    res.json()
  );
  return res.map((foodId) => ({
    id: foodId.id.toString(),
  }));
}
