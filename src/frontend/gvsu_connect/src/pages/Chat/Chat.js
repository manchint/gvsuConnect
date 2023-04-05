import React, { useEffect, useState } from "react";

import { MessageLeft, MessageRight } from "./Message";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {db} from '../../firebase';
import { addDoc, collection, query, where, serverTimestamp, orderBy, getDocs, doc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { TextInput } from "./TextInput";
import { getAuth } from "firebase/auth";
function Chat(props) {
  const [messages, setMessages] = useState([]);
  const auth = getAuth();
  const getPosts =  async () => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const querySnapshot = await getDocs(q);
      let messagesTemp = [];
      let idx = 0;
      let temp = await querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data(), "===", idx);
        //let 
        if(doc.data().from === auth.currentUser.displayName || doc.data().to === auth.currentUser.displayName) {
          if(doc.data().from === props.to || doc.data().to === props.to) {
            messagesTemp.push(doc.data());
          }
        }
        idx += 1;
        if(querySnapshot.size - 1 == idx) {
          // messagesTemp = messagesTemp.sort((a, b) => {
          //   if (a.timestamp < b.timestamp) {
          //     return -1;
          //   }
          // });
          setMessages(messagesTemp)
        }
      });
  };
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    console.log(messages)
  }, [messages])
  return (
    <div
      className="on-on-one-chat"
    //   style={{ display: "block", position: "initial" }}
    >
        <div style={{padding: '5px',backgroundColor: '#0d6efd',color: 'white'}}>
          <a>{props.to}</a>
          <i className="icon-close" onClick={() => props.setShowChat(false)}></i>
        </div>
      <div className="enter-msg">
        {messages.length > 0 &&
          messages.map((message) => {
            return message.from === auth.currentUser.displayName ? (
              <MessageRight message={message.msg} />
            ) : (
              <MessageLeft
                displayName={message.from}
                message={message.msg}
              />
            );
          })}
        <TextInput to={props.to} getPosts={getPosts}/>
      </div>
    </div>
  );
}

export default Chat;
