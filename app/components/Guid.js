import Link from "next/link";

const Guid = () => {
    return (
        <div className="lg:flex-row flex flex-col justify-between items-center mt-16 overflow-hidden">
          <Link className="py-4 px-16 my-2 rounded-md shadow-md shadow-lime-200" href="/menu">Menu</Link>
          <Link  className="py-4 px-16 my-2 rounded-md shadow-md shadow-lime-200" href="/categories">Categories</Link>
          <Link className="py-4 px-16 my-2 rounded-md shadow-md shadow-lime-200" href="/">Discount</Link>
        </div>
      );
};

export default Guid;