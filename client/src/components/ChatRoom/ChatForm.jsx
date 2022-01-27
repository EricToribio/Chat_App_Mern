import axios from 'axios';
import React, { useState } from 'react';

const ChatForm = ({ socket, loggedinuser, room, setMsg, msg }) => {
    const [input, setInput] = useState()



    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const msgData = {
            room: room,
            author: loggedinuser.username,
            msg: input
        }
        await axios.put(`http://localhost:8000/api/chatroom/update/${room}`, {
            chats: [...msg, msgData]
        }).then(response => {
            console.log('success')
        }).catch(err => {
            console.log(err)
        })
        socket.emit("send_message", msgData);
        setMsg((msg) => [...msg, msgData])
        setInput("")

    }
    return (
       
            <form className='d-flex align-items-center justify-content-center mt-3 gap-3' onSubmit={onSubmitHandler}>
                <div>
                    <input type="text" value={input} autoComplete='off' onChange={(e) => setInput(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Send</button>
            </form>
        
    )
};

export default ChatForm;
