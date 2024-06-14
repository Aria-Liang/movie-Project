import React, {useState} from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        "username": "",
        "password": "",
        "email": "",
    });

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const login = async () => {
        let responseData;
        await fetch("http://localhost:3000/api/user/login", {
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {responseData = data});

        if (responseData.success) {
            window.location.replace("/");
        }
    }

    const Signup = async() => {
        let responseData;
        await fetch("http://localhost:3000/api/user/signup", {
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {responseData = data});

        if (responseData.success) {
            window.location.replace("/");
        }
    }

    return (
        <div className="loginsignup" >
            <div className = "loginsignup-container">
                <h1>{state}</h1>
                <div className="loginSignup-fields">
                    {state === "Sign Up" ? (
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            type="email"
                            placeholder='Email Address'
                            />): (<></>)}
                    <input 
                        name="username"
                        value={formData.username}
                        onChange={changeHandler}
                        type="text"
                        placeholder='Your Name'
                    />
                    <input 
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder='Password'/>
                </div>
                <button onClick={() => {
                    state === "Login" ? login(): Signup();
                }}>
                    Continue 
                </button>
                {state === "Sign Up" ? (
                    <p className="loginsignup-login">
                        Already have an account?
                        <span onClick={()=>{setState("Login")}}> Login here</span>
                    </p>
                ): (
                    <p className="loginsignup-login">
                        Create an account?
                        <span onClick={()=>{setState("Sign Up")}}> Click here</span>
                    </p>
                )}

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I agree to the terms of the use & privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;