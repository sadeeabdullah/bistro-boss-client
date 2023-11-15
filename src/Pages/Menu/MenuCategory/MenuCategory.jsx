import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title ,  img}) => {
    return (
        <div className="pt-8">
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items?.map(item => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn bg-gray-500  border-b-4 text-white hover:bg-gray-500 hover:border-b-0 border-white border-0">Order Now</button>
            
            </Link>
        </div>
    );
};

export default MenuCategory;