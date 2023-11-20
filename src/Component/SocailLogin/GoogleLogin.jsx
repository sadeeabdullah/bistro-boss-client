
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res =>{
            console.log(res)
            const userInfo = {
                email: res.user?.email,
                name : res.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then( res=> console.log(res.data))
            navigate('/')
        })
    }
    return (
        <div>
            <div>
                <button 
                onClick={handleGoogleSignIn}
                className="btn text-sky-600">
                    
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;