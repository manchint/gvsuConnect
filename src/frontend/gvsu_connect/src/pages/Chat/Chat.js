import React, { useEffect, useState } from "react";

import { MessageLeft, MessageRight } from "./Message";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { TextInput } from "./TextInput";
import axios from 'axios';
function Chat(props) {
    var data = {
        'from' : props.from,
        'to' : props.to
    }
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:3001/getmessages',data, headers).then (res => {
            console.log(res.data)
            //navigate('/home');
            setMessages(res.data)
        });
    }, [])
    
    setTimeout(() => {
        axios.post('http://localhost:3001/getmessages',data, headers).then (res => {
            console.log(res.data)
            //navigate('/home');
            setMessages(res.data)
        });
    }, 5000)
   // const currentUser = localStorage.getItem('username')
   const currentUser = 'test'
    return(
       
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
             {messages.length > 0 && 
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <div>
                        {messages.map(message => {
                            return message.from_user === currentUser ? <MessageRight message = {message.msg}/> : 
                                <MessageLeft displayName = {message.from_user} message = {message.msg}/>
                        })}
                        <TextInput from={props.from} to={props.to}/>
                    </div>
                    
            </Modal.Body>
        </Modal.Dialog>
}
        </div>
    )
}

export default Chat;