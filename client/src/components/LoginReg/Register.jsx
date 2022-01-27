import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';



const Register = () => {
    const history = useHistory()

    const [registerInfo, setRegisterInfo] = useState({
        username:"",
        email:"",
        password:"",
        confirm:""
    })

    const [errors, setErrors] = useState({
        username:"",
        email:"",
        password:"",
        confirm:""
    })

    const regChangeHandler = (e)=>{
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]:e.target.value
        })
    }

    const register = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", registerInfo, {withCredentials:true})
        .then(res=>{
            console.log("response from registering", res);
            if(res.data.errors){
                setErrors(res.data.errors)
            }else{
                console.log("success!")
            }
        })
        .catch(err=> console.log(err))

    }

    return (
        <>
        <div className="text-center mt-3">
            <form className='card col-4 p-3 mx-auto mt-3' onSubmit= {register}>
                <div className="form-group">
                    <label>User Name</label>
                    <input onChange = {regChangeHandler} type="text" className="form-control" name= 'username' />
                    {errors.username? <p className="text-danger">{errors.username.message}</p>: ""}
                </div>
                <div className="form-group my-3">
                    <label>Email</label>
                    <input onChange = {regChangeHandler} type="text" className="form-control" name= 'email' />
                    {errors.email? <p className="text-danger">{errors.email.message}</p>: ""}

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange = {regChangeHandler} type="password" className="form-control" name= 'password' />
                    {errors.password? <p className="text-danger">{errors.password.message}</p>: ""}

                </div>
                <div className="form-group my-3">
                    <label>Confirm Password</label>
                    <input onChange = {regChangeHandler} type="password" className="form-control" name= 'confirm' />
                    {errors.confirm? <p className="text-danger">{errors.confirm.message}</p>: ""}

                </div>
                <div className='d-flex justify-content-between p-3'>
                    <input type="submit" value="Sign Up" className= "btn btn-primary" />
                    <Link to="/">Already Registered? Login Here!</Link>
                </div>
            </form>
        </div>
        
        </>
    );
};



export default Register;