import Card from "../modules/Card";


const MenuPage = ({data}) => {
    console.log(data)
    return (
        <div className="my-20">
          <h1 className= "border-b-4 w-fit border-[#53c60b] mb-10 text-xl">Menu</h1>
          <div className="flex flex-wrap justify-between">
            {data.map(food=><Card key={food.id} {...food} />)}
          </div>
          
        </div>
    );
};

export default MenuPage;