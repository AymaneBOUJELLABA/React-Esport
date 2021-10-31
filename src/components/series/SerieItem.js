import { ListItem, Stack } from '@mui/material';
import React from 'react';
import KeyValue from '../KeyValue';

function SerieItem(props)
{
    const serie = props.serie;
    return (
        <Stack spacing="3">
            {Object.entries(serie).map(([key,value]) => (
                (key=='full_name' || key=='id' || key=='year' )?
                <KeyValue key={key} pkey={key} value={value} />
                :
                ''
            ))}
        </Stack>
    );
}

export default SerieItem;