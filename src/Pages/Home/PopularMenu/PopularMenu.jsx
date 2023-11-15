import useMenu from "../../../Hooks/useMenu"
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const PopularMenu = () => {
    const [menu]  = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12 mt-12">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItem?.map(item => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center
            items-center mt-8">
            <button className="p-4 border-orange-500   hover:bg-gray-800 text-orange-500 border-solid border-b-2 rounded-lg">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;