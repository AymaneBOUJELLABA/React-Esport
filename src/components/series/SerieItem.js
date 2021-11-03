import { ListItem, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyValue from '../KeyValue';

function SerieItem(props)
{
    const serie = props.serie;
    const attributes = ["full_name","id","year"]
    return (
        <Stack>
            {Object.entries(serie).map(([key,value]) => (
                (attributes.includes(key))?
                <KeyValue class="object" key={key} pkey={key} value={value} />
                :
                    key=="winner_id" && value!==null?
                        <Stack >
                            <Typography className={'object-key'} variant="body">Winner Team :</Typography>
                            <Button component={Link} 
                                    to={'/teams/'+value}
                                    size="small" 
                                    variant="contained">
                                        Winner
                            </Button>
                        </Stack>
                    : ''
            ))}
        </Stack>
    );
}

export default SerieItem;