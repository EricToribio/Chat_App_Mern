import axios from 'axios';
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import io from 'socket.io-client';
export const Header = ({children}) => {
    const [socket] = useState(() => io(":8000"))
    const history = useHistory()
    const onClickHandler = () => {
        axios.get('http://localhost:8000/logout', {withCredentials:true})
        .then(res => {
            socket.disconnect(true)
            history.push('/')
        })
    }
    return (
        <div>
            <div className='d-flex justify-content-between p-3 bg-dark'>
                <div>
                    <Link to='/dashboard' className='btn btn-success'>Dashboard</Link>
                </div>
                <div>
                    <h1 className='text-white'>Let's Bring Back AIM!</h1>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={onClickHandler}>Log out</button>
                </div>
            </div>
            {children}
        </div>
    )

};
