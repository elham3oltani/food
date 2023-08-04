import DetailsPage from "@/app/components/template/DetailsPage";
export default async function Detail({ params: { idFood } }) {
  const data = await getDataFood(idFood);
  return (
<DetailsPage {...data} />
  );
}

export async function getDataFood(idFood) {
  const res = await fetch(`http://localhost:4000/data/${idFood}`);
  return res.json();
}
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/data",{nex:{ revalidate: 10 },}).then((res) =>
    res.json()
  );
  return res.map((foodId) => ({
    id: foodId.id.toString(),
  }));
}
