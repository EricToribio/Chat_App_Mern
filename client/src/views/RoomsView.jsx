import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import ChatForm from '../components/ChatRoom/ChatForm';
import { Chatrooms } from '../components/ChatRoom/Chatrooms';

export const RoomsView = () => {
  const {room } = useParams()
  const [socket] = useState(() => io(":8000"))
  const [loggedinuser, setLoggedInUser] = useState({})
  const [msg, setMsg] = useState([])
  const history = useHistory()
  

  useEffect (() => {
    socket.emit('join_room', room)
    axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
        .then(res=>{
            setLoggedInUser(res.data)
        })
        .catch(err=> {
            history.push("/")
            console.log("errorrrrrr",err)
        })
        axios.get(`http://localhost:8000/api/chatroom/${room}`)
    .then(response => {
      setMsg(response.data.ChatRoom.chats)
      console.log(response.data.ChatRoom)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  useEffect(async ()  => {
    await socket.on('receive_message', ( data ) => {
      console.log(data)
      setMsg( (msg) => [...msg,data])
      console.log(msg,'2')
    })
  },[socket]) 

  return (
    <div className='bg-secondary bg'>
      <h1 className='text-center p-3'>Welcome {loggedinuser.username}</h1>
      <Chatrooms msg={msg} username={loggedinuser.username}/>
      <ChatForm msg={msg} setMsg={setMsg} room={room}  socket={socket} loggedinuser={loggedinuser}/>
    </div>
  )
};
