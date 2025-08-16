import React from 'react'
import { useState, useCallback } from 'react'
import {useSocket} from '../context/SocketProvider.jsx';


const Room = () => {
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');

    const socket = useSocket();
    console.log(socket);

    const handleSubmitForm = useCallback((e)=>{
        e.preventDefault()
        console.log({email,room})
    },[email,room])

  return (
    <div>
      <h1>Room</h1>
      <form action="" onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email:  </label>
        <input type="email" id='email' placeholder='email' value={email}
        onChange={(e)=>{setEmail(e.target.value)}} />
            <br />
        <label htmlFor="room">Room Number: </label>
        <input type="text" placeholder='room number' value={room}
        onChange={(e)=>{setRoom(e.target.value)}} />
        <br />
        <button>Join</button>
      </form>
    </div>
  )
}

export default Room
