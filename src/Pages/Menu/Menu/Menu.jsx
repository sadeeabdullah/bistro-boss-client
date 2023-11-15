import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss Todays Offer"}
        heading={"Todays Offer"}
      ></SectionTitle>
      {/* offered menu Items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>

      {/* forpizza */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* for salad */}
      <MenuCategory items={salad} title={"salad"} img={pizzaImg}></MenuCategory>
      {/* for soup */}
      <MenuCategory items={soup} title={"soup"} img={pizzaImg}></MenuCategory>
    </div>
  );
};

export default Menu;
