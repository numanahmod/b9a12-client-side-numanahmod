import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by ', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error){
        // to do something with request error 
        return Promise.reject(error)
    })
    //intercepters 401 403

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        // console.log('status error in the interceptors', status);
        if(status === 401 || status === 403) {

            await logOut();
            navigate('/logIn')
        }
        return Promise.reject(error)
    }
)
    return axiosSecure;
};

export default useAxiosSecure;