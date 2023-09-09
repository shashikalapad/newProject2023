import React, { useContext, useState } from 'react'
import './Login.css'
import Facebook from '../../Logo/facebook.png'
import Google from '../../Logo/Google.png'
import { Link } from 'react-router-dom';
// import { DataParentContext } from '../App';
import { useNavigate } from 'react-router-dom';
const Login = ({setLoginDetails}) => {
    const navegate = useNavigate();
    // const localContext = useContext(DataParentContext);
    // const { LoginDetails, setLoginDetails } = localContext;
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginData = (e) => {
        e.preventDefault();
        if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
            let obj = [{
                userName: localStorage.getItem("userName"),
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password")
            }]
            setLoginDetails(obj)
            alert("Login Successfully");
            navegate('/')
        }

    }
    return (
        <form>
            <div className='LoginContainer'>
                <div className='mainLogin'>
                    <h1 style={{ textAlign: "center", marginTop: "15px" }}>Log in</h1>
                    <h3 style={{ textAlign: "center", marginTop: "-15px" }}>Don't have an account?<span style={{ color: "rgb(13,110,253)" }}><Link to="/signUp" style={{ color: "rgb(13,110,253)", textDecoration: "none" }} > Sign Up </Link></span></h3>
                    <div className='icons'>
                        <button style={{ marginRight: "10px" }}><img src={Google} alt="" style={{ width: "38px", borderRadius: "50%" }} /> Sign in with <span style={{ color: "red", }}><b>Google</b></span></button>
                        <button id='iconFace'><img src={Facebook} alt="" /></button>
                    </div>
                    <div className='OR'>
                        <div className='spaceDiv'></div>
                        <span className='OORR'>or</span>
                        <div className='spaceDiv'></div>
                    </div>
                    <div className='center'>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "220px" }}>Email</label><br />
                            <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required /><br />
                        </div>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "200px" }}>Password</label><br />
                            <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required /><br />
                        </div>
                        <button onClick={(e)=>LoginData(e)}>Log in</button>
                        //if user doesnot loged in show the button otherwise hide
                        <p style={{ color: "rgb(13,110,253)", cursor: "pointer" }}>Forgot Password ?</p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login