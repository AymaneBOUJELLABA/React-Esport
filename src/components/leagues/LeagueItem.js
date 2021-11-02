import { Avatar, CardMedia, Card, CardContent, Typography, Stack, Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function LeagueItem(props)
{   
    return (
        <Stack direction="row">
            <Card sx={{maxWidth:'150px'}}>
                <CardMedia component="img"
                        height="100"
                        image={props.img}
                        alt={props.name + ' image'}
                />
            </Card>
            <Card sx={{width:300}}>
                <CardContent>
                    <Typography align="center" variant="h5">
                        {props.name}
                    </Typography>
                </CardContent>
                <Link to={"/leagues/"+props.id} >Details</Link>
            </Card>
        </Stack>
    );
}

export default LeagueItem;
