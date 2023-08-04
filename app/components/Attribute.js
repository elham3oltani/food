import Fast from "./icons/Fast";
import Food from "./icons/Food";
import Choice from "./icons/Choice";
import Clock from "./icons/Clock";

const Attributte = () => {
 return(
  <div className="my-28">
  <h3 className="text-2xl font-bold text-[#53c60b]">Why us?</h3>
  <div className="flex justify-between items-center my-8">
    <div className="w-[150px] pt-3 flex flex-col items-center shadow-lg rounded-lg h-[100px] shadow-lime-200">
      <Fast className="" />
      <p className="my-2">Fast</p>
    </div>
    <div className="w-[150px] pt-3  flex flex-col items-center shadow-lg rounded-lg h-[100px] shadow-lime-200">
      <Food />
      <p className="my-2">Best Restaurants</p>
    </div>
    <div className="w-[150px] pt-3 flex flex-col items-center shadow-lg rounded-lg h-[100px] shadow-lime-200">
      <Choice />
      <p className="my-2">Your Choice</p>
    </div>
    <div className="w-[150px] pt-3 flex flex-col items-center shadow-lg rounded-lg h-[100px] shadow-lime-200">
      <Clock />
      <p className="my-2">24-7</p>
    </div>
  </div>
</div>
 )
};

export default Attributte;