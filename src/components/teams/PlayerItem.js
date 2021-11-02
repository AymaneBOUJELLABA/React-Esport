import { ListItem, Stack } from '@mui/material';
import React from 'react';
import KeyValue from '../KeyValue';

function PlayerItem(props)
{
    const player = props.player;
    const attributes = ["first_name","last_name","id","name","role"]
    return (
        <Stack spacing="3">
            {Object.entries(player).map(([key,value]) => (
                (attributes.includes(key))?
                <KeyValue  class="object" key={key} pkey={key} value={value} />
                :
                ''
            ))}
        </Stack>
    );
}

export default PlayerItem;