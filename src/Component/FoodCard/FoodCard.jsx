

const FoodCard = ({item}) => {
    const {image, price ,recipe, name} = item;
   
    return (
        <div className="h-[541px] w-full bg-base-200 relative">
                <figure><img className="h-[300px] overflow-hidden w-full" src={image} alt="" /></figure>
                <p className=" bg-slate-900 rounded-lg text-white absolute top-1 px-4 py-2 mr-4 mt-4">${price}</p>
                <div className="p-4 ">
                <h3 className="font-semibold text-center mb-2 mt-4">{name}</h3>
                <p className="text-center">{recipe}</p>
                <div className="flex items-center justify-center mt-2 mb-4">
                <button className="p-4 border-orange-500 bg-slate-200   hover:bg-gray-800 text-orange-500 border-solid border-b-2 rounded-lg">ADD TO CART</button>
                </div>
                </div>



            </div>
    );
};

export default FoodCard;