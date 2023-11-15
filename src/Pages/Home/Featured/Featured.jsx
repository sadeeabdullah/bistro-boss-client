import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./FeaturedItem.css"

const Featured = () => {
    return (
        <div className="featured-item bg-fixed  text-white pt-8 my-20">
            <SectionTitle
            subHeading="Check It Out"
            heading="Featured item"
            >

            </SectionTitle>


        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36 gap-4  ">

            <div>
                <img src={featured} alt="" />
            </div>
            <div>
                <p>Aug 20, 2023</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias amet laboriosam quod eum provident dolores consectetur cum sequi odit, voluptate pariatur natus libero, autem maxime facere, assumenda nesciunt corporis impedit numquam expedita at ex eos reprehenderit. Velit cum ipsa debitis?</p>
                <button className="btn bg-transparent  border-b-4 text-white hover:bg-gray-500 hover:border-b-0 border-white border-0">Order Now</button>
            </div>

        </div>

        </div>
    );
};

export default Featured;