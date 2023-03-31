import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
    
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const sendMessage = (e) => {
        var data = {
            'from' : localStorage.getItem("username"),
            'to' : props.to,
            'msg' : msg
    
        }
        setMsg('');
        e.preventDefault();
        axios.post('http://localhost:3001/sendmessage',data, headers).then (res => {
            //if anything needed to be done
        });
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



