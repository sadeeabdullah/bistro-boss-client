import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../Category/Category"
import Intro from "../../../Component/Intro/Intro";
import ChefRecommend from "../../../Component/ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div className=" ">
        <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <Intro/>
            <PopularMenu/>
            <ChefRecommend/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;