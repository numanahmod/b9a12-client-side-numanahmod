import { FaHome, FaRegQuestionCircle,  FaShoppingCart } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import { CgAdd,  CgAssign,  CgProfile } from "react-icons/cg";
import { MdManageSearch } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import {  FaFileCircleQuestion } from "react-icons/fa6";


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className=" w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <h1> Dashboard</h1>
                   
                   {
                    isAdmin ?
                     <>
                     <li> <NavLink to={'/dashboard/adminProfile'} > <CgProfile /> Admin Profile</NavLink> </li>
                    
                    <li> <NavLink to={'/dashboard/addPackage'} ><CgAdd></CgAdd> Add Package
                    </NavLink> </li>

                    <li> <NavLink to={'/dashboard/manageUsers'}> <MdManageSearch></MdManageSearch>  Manage Users </NavLink> </li>
                   
                   
                    </> 
                    :
                    <>
                     <li> <NavLink to={'/dashboard/touristProfile'} > <CgProfile /> My Profile</NavLink> </li>
                    
                    <li> <NavLink to={'/dashboard/myBookings'} ><FaShoppingCart> </FaShoppingCart> My bookings</NavLink> </li>

                    <li> <NavLink to={'/dashboard/myWishList'}> <FaShoppingCart> </FaShoppingCart>  My Wishlist </NavLink> </li>
                   
                    <li> <NavLink to={'/dashboard/request'} ><FaRegQuestionCircle></FaRegQuestionCircle> Request to Admin
                    </NavLink> </li>
                    </>
                   }
                    {/* shared nav links */}
                    <div className="divider"></div> 
                    <li> <NavLink to={'/'} > <FaHome></FaHome> Home </NavLink> </li> 
                    <div className="divider"></div> 
                    <li>   Guide DashBoard  </li>
                    <li> <NavLink to={'/dashboard/guideProfile'} > <CgProfile /> Guide Profile</NavLink> </li> <br />
                    <li> <NavLink to={'/dashboard/assignedTour'} > <CgAssign></CgAssign> Assigned Tours</NavLink> </li>

                </ul>

            </div> 
            
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet> </Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;