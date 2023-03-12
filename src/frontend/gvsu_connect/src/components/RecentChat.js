import React from "react";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


function RecentChat() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>
            <Card sx={{ maxWidth: 345}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    title="fdsaf"
                />
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    title="fdsaf"
                />
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    title="fdsaf"
                />
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    title="fdsaf"
                />
            </Card>
            </div>

        </div>
    )
}

export default RecentChat;