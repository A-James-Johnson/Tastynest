import React, { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { clearItem } from '../mockdata/cartSlice';
import {useDispatch} from "react-redux";


const Signup = () => {
    const [username,setusername] =useState("");
    const [email, setemail]       = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage]   = useState("");
    const navigate=useNavigate();
      const dispatch=useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const cart = localStorage.getItem("cart");
        if (token) {
          localStorage.removeItem("accessToken");
          console.log("Token cleared on signup page visit");
        }
         if (cart) {
              localStorage.removeItem("cart");
              dispatch(clearItem())
              console.log("User cleared on login page visit");
            }
        console.log("useeffect signupp")
      }, []);
    const handleSubmit =(e)=>{
        console.log("handlesubmit is initialised")
         e.preventDefault();
         if(!username || ! email || ! password){
            setMessage("required all fields");
            return
         }
         signup();

    }
    
    const signup=()=>{
        console.log("signup is ")
         fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("data",data)
            if(data.message==="Signed up successfully"){
          
             if(data.accessToken){
              localStorage.setItem("accessToken",data.accessToken);
              localStorage.setItem("user", JSON.stringify(data.user));
              navigate("/body");
              return;
             }
              
            }else{
                alert(data.message);
            }
            
        } )
        .catch((error) => console.error("Signup error:", error));
    }

    return (
        
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
          <form
             className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
             onSubmit={handleSubmit}
           
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Signup
            </button>
            <span>Already have an account? 
             <Link to="/">Login</Link>
            </span>
            {message && (
              <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
            )}
            
          </form>
          
        </div>
      );
}

export default Signup;
