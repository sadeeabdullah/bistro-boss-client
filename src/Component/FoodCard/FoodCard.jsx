
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const {image, price ,recipe, name, _id} = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCart();



    const handleAddToCart = (  ) => {
        if( user && user.email ){
            //send cart item to the database
            const cartItem = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    // refetch the cart to update data count 
                    refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send the user to login
                navigate('/login', {state: {from: location}} )
                }
              });
        }
    }
   
    return (
        <div className="h-[541px] w-full bg-base-200 relative">
                <figure><img className="h-[300px] overflow-hidden w-full" src={image} alt="" /></figure>
                <p className=" bg-slate-900 rounded-lg text-white absolute top-1 px-4 py-2 mr-4 mt-4">${price}</p>
                <div className="p-4 ">
                <h3 className="font-semibold text-center mb-2 mt-4">{name}</h3>
                <p className="text-center">{recipe}</p>
                <div className="flex items-center justify-center mt-2 mb-4">
                <button 
                onClick={ handleAddToCart }
                className="p-4 border-orange-500 bg-slate-200   hover:bg-gray-800 text-orange-500 border-solid border-b-2 rounded-lg">ADD TO CART</button>
                </div>
                </div>



            </div>
    );
};

export default FoodCard;