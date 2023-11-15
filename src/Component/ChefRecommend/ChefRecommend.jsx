import SectionTitle from "../SectionTitle/SectionTitle";
import saladsImage from "../../assets/home/slide5.jpg"

const ChefRecommend = () => {
    return (
        <div>
            <SectionTitle
            heading={"Should Try"}
            subHeading={"CHEF RECOMMENDS"}
            >

            </SectionTitle>
            <div className="flex flex-col md:flex-row gap-12 " >
            <div className="h-[541px] w-full">
                <img className="h-[300px] overflow-hidden w-full" src={saladsImage} alt="" />
                <div className="p-4 bg-base-200">
                <h3 className="font-semibold text-center mb-2 mt-4">Caeser Salad</h3>
                <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="flex items-center justify-center mt-2 mb-4">
                <button className="p-4 border-orange-500   hover:bg-gray-800 text-orange-500 border-solid border-b-2 rounded-lg">ADD TO CART</button>
                </div>
                </div>



            </div>
            <div className="h-[541px] w-full">
                <img className="h-[300px] overflow-hidden w-full" src={saladsImage} alt="" />
                <div className="p-4 bg-base-200">
                <h3 className="font-semibold text-center mb-2 mt-4">Caeser Salad</h3>
                <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="flex items-center justify-center mt-2 mb-4">
                <button className="p-4 border-orange-500   hover:bg-gray-800 text-orange-500 border-solid border-b-2 rounded-lg">ADD TO CART</button>
                </div>
                </div>
            </div>




            <div className="h-[541px] w-full  ">
                <img className="h-[300px] overflow-hidden w-full" src={saladsImage} alt="" />
                <div className="p-4 bg-base-200">
                <h3 className="font-semibold text-center mb-2 mt-4">Caeser Salad</h3>
                <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="flex items-center justify-center mt-2 mb-4">
                <button className="p-4 border-orange-500   hover:bg-gray-800 text-orange-500 border-solid border-b-2 rounded-lg">ADD TO CART</button>
                </div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default ChefRecommend;