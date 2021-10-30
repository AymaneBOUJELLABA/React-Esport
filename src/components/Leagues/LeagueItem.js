import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Item(props)
{
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={props.img}/>
            </ListItemAvatar>
            <ListItemText>
                {props.name}
            </ListItemText>
            <Link to={"/leagues/"+props.id} >Details</Link>
        </ListItem>
    );
}

export default Item;
