import React, { useEffect, useState } from "react";

import { MessageLeft, MessageRight } from "./Message";
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
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Test1</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        {messages.map(message => {
                            return message.from_user === currentUser ? <MessageRight message = {message.msg}/> : 
                                <MessageLeft displayName = {message.from_user} message = {message.msg}/>
                        })}
                        <TextInput from={props.from} to={props.to}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Chat;