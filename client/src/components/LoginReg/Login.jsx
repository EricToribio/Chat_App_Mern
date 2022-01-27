import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
    const [errors, setErrors] = useState("")

    const [loginInfo, setLoginInfo] = useState({ 
        email:"",
        password:"",
    })
    const history = useHistory()


    const loginChangeHandler = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }
    const login = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginInfo, {withCredentials:true} )
        .then(res=>{
            if(res.data.msg == "success!"){
                history.push("/dashboard")
            }else{
                console.log(res.data.msg)
                setErrors(res.data.msg)
            }
        })
        .catch(err=> console.log(err))
    }
   

    return (
        <div className='text-center mt-3'>
            <h2>Login below</h2>
        <form className='card col-4 p-3 mx-auto mt-3' onSubmit= {login}>
            <div className="form-group">
                <label>Email</label>
                <input onChange = {loginChangeHandler} type="text" className="form-control" name= 'email' />
            </div>
            {errors &&
            <div className='bg-dark text-danger p-2'>
                {errors}
            </div> 
            }
            <div className="form-group my-3">
                <label>Password</label>
                <input onChange = {loginChangeHandler} type="password" className="form-control" name= 'password' />
                

            </div>
            
            <div className='d-flex justify-content-between p-3'>
                <button className= "btn btn-primary col-3">Login</button> 
                <div className='d-flex justify-content-end mt-3 gap-3'>
                    <h5>New Here ? </h5>
                    <Link to="/register"> Register Here</Link>
                </div>
            </div>
        </form>
    </div>
    );
};


export default Login;