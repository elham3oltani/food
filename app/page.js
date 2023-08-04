import Attribute from "./components/Attribute";
import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Descripe from "./components/Descripe";
import Guid from "./components/Guid";
import Orders from "./components/Orders";
import Ristrictions from "./components/Ristrictions";
export default function Home() {
  return (
    <main className="">
      <Banner />
      <Attribute />
      <Descripe />
      <Companies />
      <Orders />
      <Guid />
      <Ristrictions />
    </main>
  );
}
