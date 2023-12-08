import { useContext, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/axios.config';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const [data, setData] = useState({ email: '' , password: '' });
    const {Login} = useContext(AuthContext)

    const rout = useNavigate();
    console.log(data, 'data')

    function HandleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(data.email && data.password){
            if(data.password >= 8){
                try{
                    // console.log("hii")
                    const response = await api.post('auth/login' , {data})
                    if(response.data.success){
                        localStorage.setItem('My-token' , JSON.stringify(response.data.token))
                        Login(response.data.user)
                        console.log(response.data.user, "user")
                        toast.success(response.data.message);
                        setData({email : '' , password : ''})
                        rout("/");
                    } else{
                        throw new Error("Something went wrong");
                    }
                }catch(error){
                    toast.error(error?.response.data.message);
                    console.log(error , "error hai")
                }
            }else{
                toast.error("Password must be 8 digit")
            }
        }else{
            toast.error("All fields are mandatory!")
        }
    }

    return (
        <div id="apple-log-screen">
            <div className='apple-log-head'>
                <h2>Sign in for faster checkout.</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='apple-log-main'>
                    <p className='apple-log-text' >Sign in to Apple Store</p>
                    <input className='apple-log-button' placeholder='Email' name='email' onChange={HandleChange} />
                    <input className='apple-log-button' placeholder='Password' name='password' onChange={HandleChange} />
                    <div className='apple-log-remember'>
                        <div>
                            <input className='remembercheckbox' type='checkbox' />
                            <span>Remember me</span>
                        </div>
                        <input className='submit' type='submit' value='Login' />
                    </div>
                    <a className='apple-log-a'>Forgotten your password?  <i class="fa-solid fa-location-arrow fa-xs"></i></a>
                    <p className='apple-log-p'>Do not have an Apple ID? <a href='./register'>Create yours now. <i class="fa-solid fa-location-arrow fa-xs"></i></a></p>
                </div>
            </form>
            <h1 className='apple-log-line'></h1>
            <h1 className='apple-log-last'>Need some help? <a>Chat now</a> or call 000800 040 1966.</h1>
        </div>
    )
}

export default Login;