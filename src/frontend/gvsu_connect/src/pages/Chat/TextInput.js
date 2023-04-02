import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { getAuth } from "firebase/auth";
import {db} from '../../firebase';
import { addDoc, collection, query, where, serverTimestamp, orderBy, getDocs, doc, updateDoc } from "firebase/firestore";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);



export const TextInput = (props) => {
    const classes = useStyles();
    const [msg, setMsg] = useState();
    const auth = getAuth();
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const sendMessage = async (e) => {
        var data = {
            'from' : auth.currentUser.displayName,
            'to' : props.to,
            'msg' : msg
        }
        e.preventDefault();
        const docRef = await addDoc(collection(db, "messages"), data);
        setMsg('');
        props.getPosts()
    }
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Type your Message Here"
                className={classes.wrapText}
                onChange = {(e) => setMsg(e.target.value)}
                value={msg}
            />
            <i className='icon-send' onClick={(e) => sendMessage(e)}/>  
            </form>
        </>
    )
}



