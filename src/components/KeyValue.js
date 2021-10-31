import { Typography, Stack } from '@mui/material';
import React from 'react';

function KeyValue(props) {
    return(
        <Stack spacing={1}>
            <Typography variant="body" className="object-detail-key">{props.pkey} :</Typography>
            <Typography variant="body2">&nbsp;{props.value}</Typography>
        </Stack>
    );
}

export default KeyValue;