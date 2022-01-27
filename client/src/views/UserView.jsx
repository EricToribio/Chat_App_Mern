import axios from 'axios';
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const UserView = ({children}) => {
  const history = useHistory()
  useEffect(()=>{
    axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
        .then(res=>{
            console.log("logged in user info", res)
            history.push('/dashboard')
            
        })
        .catch(err=> {
            
            console.log("noUser logged in")
        })
}, [])

  return (
    <div className='bg-secondary bg'>
      <div>
        <h1 className='text-center'>Let's Bring Back AIM!</h1>
      </div>
      <div >{children}</div>
    </div>
  )
};

export default UserView;
