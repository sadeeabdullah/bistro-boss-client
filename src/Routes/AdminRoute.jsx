import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading}= useAuth();
    const [ isAdmin, isAdminLoading ] = useAdmin();
    const location  = useLocation();

    if( loading || isAdminLoading ){
        return(
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-spinner text-error"></span>

            </div>
        )
    }
    if( user && isAdmin ){
        return children;
    }
    console.log(isAdmin)
    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;