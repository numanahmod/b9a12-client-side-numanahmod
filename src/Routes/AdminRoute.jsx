import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

const AdminRoute = ({children}) =>{
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
            // console.log(location.pathname);
 
    if (loading) {
        return <p className="text-center text-red-600 text-3xl font-bold"> Data loading  </p>
    }
    if (user) {
        return children;
        
    }

    return <Navigate  to='/logIn' state={{from: location}} replace></Navigate>
};

export default AdminRoute;