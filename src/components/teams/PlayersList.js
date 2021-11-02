import { List, ListItem, Typography, Stack, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import PlayerItem from './PlayerItem';

function PlayersList(props) 
{
    const players = props.players;

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };
    return (
        <List style={flexContainer}>
            {players.length > 0? players.map((el,idx) => (
            <ListItem key={idx}>
                <Stack spacing={2}>
                    <Typography variant="body" sx={{fontWeight:'bolder', color:'orange'}}>Player {el.id} :</Typography>
                    <PlayerItem player={el} />
                </Stack>
            </ListItem>
            ))
        
            :
                <ListItem>
                    <Typography variant="body" sx={{color:'red',fontWeight:'bold'}}>No players in DB</Typography>
                </ListItem>
            }
        </List>
    );
}

export default PlayersList;