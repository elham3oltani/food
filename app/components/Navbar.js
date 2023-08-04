import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <div>
       <Link className="text-lg text-[#53c60b]" href="/">EliFood</Link>
      </div>
      <div className="text-slate-500">
        <Link href="/" className="mx-4" >Menu</Link>
        <Link href="/" className="mx-1" >Categories</Link>
      </div>
    </header>
  );
};

export default Navbar;
