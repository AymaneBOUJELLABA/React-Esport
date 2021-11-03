import { List, ListItem, Typography, Stack, Card } from '@mui/material';
import React, { useState } from 'react';
import KeyValue from '../KeyValue';
import SerieItem from './SerieItem';

function SeriesList(props) 
{
    const series = props.series;
    console.log(series);

    return (
        <Stack direction="row" spacing={2} sx={{flexWrap:'wrap'}}>
            {series.map((el,idx) => (
            <Card sx={{width:'150px'}} key={idx}>
                <Stack spacing={2}>
                    <Typography variant="body" sx={{fontWeight:'bolder', color:'orange'}}>Serie {el.id} :</Typography>
                    <SerieItem serie={el} />
                </Stack>
            </Card>
            ))}
        </Stack>
    );
}

export default SeriesList;