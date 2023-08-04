import Link from "next/link";

const Guid = () => {
    return (
        <div className="flex justify-between items-center mt-16">
          <Link className="py-4 px-16 rounded-md shadow-md shadow-lime-200" href="/menu">Menu</Link>
          <Link  className="py-4 px-16 rounded-md shadow-md shadow-lime-200" href="/categories">Categories</Link>
          <Link className="py-4 px-16 rounded-md shadow-md shadow-lime-200" href="/">Discount</Link>
        </div>
      );
};

export default Guid;