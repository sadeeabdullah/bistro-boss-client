import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const nofooterNavbar = location.pathname.includes('login')
    const nofooterNavbar1 = location.pathname.includes('signUp')
    return (
        <div>
           {nofooterNavbar || nofooterNavbar1 || <Navbar></Navbar>}
            <Outlet></Outlet>
            {nofooterNavbar || nofooterNavbar1 || <Footer></Footer>}
        </div>
    );
};

export default Main;