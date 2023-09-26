import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex my-28">
      <div>
        <h1 className="border-b-2 my-6 text-2xl font-bold w-fit text-[#53c60b]">
          EliFood
        </h1>
        <div className="text-justify">
          <p className="mb-4">Food Delivery and Takeout!</p>
          <p className="mb-4 mt-2 text-slate-400">
            BotoFood is an online food ordering and delivery platform launched
            by Uber in 2014. Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </p>
          <Link href="/menu" className="rounded-md my-5 py-2 px-2 text-white bg-[#53c60b]">
          See All
        </Link>
        </div>
       
      </div>
      <div>
        <img src="/images/banner.png" className="w-[800px]" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
