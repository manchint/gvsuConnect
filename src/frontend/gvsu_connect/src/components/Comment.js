import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function Post() {
    return (
        <div style={{marginLeft: '20px'}} >
            <Avatar sx={{ bgcolor: red[500], width:'25px', height:'25px', fontSize:'12px', position:'absolute' }} aria-label="recipe">R</Avatar>
            <Typography variant="body2" color="text.secondary" style={{marginLeft:'35px'}}>
                testingggg
            </Typography>
        </div>
    )
};