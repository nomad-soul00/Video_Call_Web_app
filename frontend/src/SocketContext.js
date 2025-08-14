import React from "react";
import { createContext, useState, useEffect, useRef } from "react";
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io('http://localhost:5000');

const ContextProvider = ({children})=>{
    const [stream, setStream] = useState(null);

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true, audio:true})
        .then(mystream =>{
            setStream(mystream);
        })
    })

    const answercall = ()=>{
        
    }

    const callUser = () =>{

    }

    const leaveCall = () =>{

    }

}