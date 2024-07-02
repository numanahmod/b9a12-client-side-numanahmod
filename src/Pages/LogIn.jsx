import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import {  GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/Firebase.config";

import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
import google from '/google.png'
import useAxiosPublic from "../hooks/useAxiosPublic";

 
const LogIn = () => {
    
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const {login } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);
	const location = useLocation();
	const navigate = useNavigate(); 
	const from = location.state?.from?.pathname || '/';
	const axiosPublic = useAxiosPublic();



	console.log('location in the login page', location);
	const handleLogin = e => {
		e.preventDefault();
        
   
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		const email = form.get('email');
		const password = form.get('password')
		console.log(email,password);
	login(email, password)
  .then(result=>{
	const userInfo = {
				
		name: result.user?.displayName,
		email: result.user?.email
	}
	axiosPublic.post('/users', userInfo)
	.then( res =>{
		console.log(res.data);
	})
			console.log(result.user);
			toast.success('Login successfully')
 // navigate after login 
 navigate(from, {replace: true});
	const userC = {email};
	fetch(`${import.meta.env.VITE_API_URL}/user`,{
		method: 'POST',
		headers: {
			'content-type' : 'application/json'
		},
		body: JSON.stringify(userC)
	})
	.then(res => res.json())
	.then(data => {
		console.log(data);
	})

 })

 
 .catch(error => {
			console.error(error) 
 toast.error('Email or Password does not match with registered account')
		})
		// toast.success('Login successfully')
		}

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result =>{
			const userInfo = {
				
				name: result.user?.displayName,
				email: result.user?.email
			}
			axiosPublic.post('/users', userInfo)
			.then( res =>{
				console.log(res.data);
			})
         const loggedInUser = result.user;
 toast.success('Login successfully with Google')
         console.log(loggedInUser);
	// navigate after login 
 navigate(from, {replace: true});
	
        })
        .catch(error => {
         console.log('error', error.message);
        })
		
		navigate(location?.state? location.state: '/');
		
    }
    

    return (
        <div className=" pt-20">
           {/* <Helmet>
            <title> Your Dream Home |Login </title>
           </Helmet> */}
            <div className="justify-center place-items-center lg:ml-[450px] md:ml-[200px] m-5 mb-12">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mt-12 bg-purple-300">
               
            
			<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	
	<div className="my-6 space-y-4">
		<button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full h-12 p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 bg-purple-300">
			<img className="w-6 h-6" src={google} alt="" />
			<p>Login with Google</p>
		</button>
		
		
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
    
	<form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
	<div>
				<label htmlFor="email" className="block mb-2 font-bold">Email address</label>
				<input type="email" name="email" id="email" placeholder="your email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
			</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block font-bold">Password</label>
			<div className="flex relative">
			<input type={ showPassword ? "text" : "password"} name="password" id="password" placeholder="password"  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
			<span className="absolute top-3 right-2 text-white" onClick={() => setShowPassword(!showPassword)}>
				{
					showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
				}
			</span>
			</div>
			<div className="flex justify-end text-xs text-red-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900  bg-purple-600 font-bold">Login</button>
	</form>
    
    
	<div className="flex items-center pt-4 space-x-1">
		
	</div>
	<div className="flex justify-center space-x-4">
    
	</div>
	<p className="text-xs text-center sm:px-6 text-gray-950"> Do not have an account?
		<Link to='/register' rel="noopener noreferrer" href="#" className="underline text-blue-800 font-bold"> Register </Link>
	</p>
</div>
        </div>
       

     </div>
    );
};

export default LogIn ;