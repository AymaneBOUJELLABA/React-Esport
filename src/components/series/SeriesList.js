import { List, ListItem, Typography, Stack } from '@mui/material';
import React, { useState } from 'react';
import KeyValue from '../KeyValue';
import SerieItem from './SerieItem';

function SeriesList(props) 
{
    const series = props.series;

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };
    return (
        <List style={flexContainer}>
            {series.map((el,idx) => (
            <ListItem key={idx}>
                <Stack spacing={2}>
                    <Typography variant="body" sx={{fontWeight:'bolder', color:'orange'}}>Serie {el.id} :</Typography>
                    <SerieItem serie={el} />
                </Stack>
            </ListItem>
            ))}
        </List>
    );
}

export default SeriesList;