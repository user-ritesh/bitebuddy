import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

// 1. THIS LINE MUST EXIST AND BE SPELLED EXACTLY LIKE THIS
const LoginPopup = ({ setShowLogin }) => { 

    const { url, setToken, loadCartData, setRole } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    // 2. The updated login function goes here, inside the component
    const onLogin = async (e) => {
        e.preventDefault();
        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        } else {
            new_url += "/api/user/register";
        }
        
        try {
            const response = await axios.post(new_url, data);
            if (response.data.success) {
                setToken(response.data.token);
                setRole(response.data.role); // Sets the user/admin role
                localStorage.setItem("token", response.data.token);
                loadCartData(response.data.token); 
                setShowLogin(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error connecting to server");
        }
    }

    // 3. Your JSX return block goes here
    return (
        <div className='login-popup'>
           {/* Your existing HTML/JSX form code stays here */}
        </div>
    )
}

// 4. THIS EXPORT MUST MATCH THE CONST DECLARATION AT THE TOP
export default LoginPopup;