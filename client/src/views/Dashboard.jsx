import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import RoomsForm from '../components/Dashboard/RoomsForm'
import AllChatRooms from '../components/Dashboard/AllChatRooms'




const Dashboard = () => {
    const [loggedinuser, setLoggedInUser] = useState({})
    const [newRoom, setNewRoom] = useState("")
    const history = useHistory()



    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err=> {
                history.push("/")
                console.log("errorrrrrr",err)
            })
    }, [])


    
    
    return (
        <div className='bg-secondary bg' >
            <RoomsForm SetNewRoom={setNewRoom}/>
            <AllChatRooms newRoom={newRoom} loggedinuser={loggedinuser}/>
        </div>
    );
};


export default Dashboard;