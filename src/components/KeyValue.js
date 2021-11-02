import { Typography, Stack } from '@mui/material';
import React from 'react';

function KeyValue(props)
{
    let style;

    if(!props.class)
        style = 'detail';
    else
        style = props.class;
    

    return(
        <Stack spacing={1}>
            <Typography variant="body" className={style+'-key'}>{props.pkey} :</Typography>
            <Typography variant="body2">&nbsp;{props.value}</Typography>
        </Stack>
    );
}

export default KeyValue;