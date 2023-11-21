import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
  const [menu,,refetch] = useMenu();
  console.log(refetch)
  const handleDeleteItem = (item) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
        if(res.data.deletedCount> 0){
            // refetch to update ui
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} has been deleted successfully.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        }
      });
  }

  return (
    <div>
      <SectionTitle
        heading={"Manage all items"}
        subHeading={"Hurry up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table  w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">$ {item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button 
                    className="btn btn-sm btn-ghost  bg-orange-500  text-white ">
                      <FaEdit></FaEdit>
                    </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={()=>handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaTrashAlt
                      ></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
