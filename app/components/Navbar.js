import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mx-auto py-4">
      <div>
       <Link className="text-lg ml-4 text-[#53c60b]" href="/">EliFood</Link>
      </div>
      <div className="text-slate-500">
        <Link href="/menu" className="mx-4" >Menu</Link>
        <Link href="/categories" className="mx-1" >Categories</Link>
      </div>
    </header>
  );
};

export default Navbar;
