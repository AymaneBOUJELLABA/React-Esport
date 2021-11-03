import { CircularProgress, Card, CardContent, CardHeader, CardMedia, List, ListItem, Stack, Divider, Typography, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchLeaguebyId } from '../../app/leaguesAPI';
import KeyValue from '../KeyValue';
import SeriesList from '../series/SeriesList';

function LeagueDetails(props)
{
    const [league, setLeague] = useState({});
    const [loading, setLoading] = useState(false);
    let { id } = useParams();

    async function getLeague(id)
    {
        setLoading(true);
        const data = await fetchLeaguebyId(id);

        setLeague(data);
        
        setLoading(false);
    }

    useEffect(() =>
    {
        getLeague(id);
    }, [])

    let content;

    if(loading)
    {
        content = <CircularProgress colors="secondary" />

    }else
    {
        content =   <Stack direction="row">
                        <Card sx={{maxWidth:500, bgcolor:'#20c997'}}>
                            <CardHeader title={"id : "+id}/>
                            <CardMedia component="img"
                                        height="auto"
                                        image={league.image_url}
                                        alt={league.name + ' image'}
                                />
                        </Card>
                        <Card sx={{}}>
                        <CardContent>
                            <List>
                            {Object.entries(league).map(([key,value]) => (
                                <ListItem key={key}>
                                    {
                                        !(key=='id' || key=='image_url') ?
                                        (
                                            (key=='series' || key=='videogame') ? 
                                            <Stack>
                                                <Typography variant="body" className="detail-key">{key} :</Typography>
                                                {key=='series'?
                                                    <SeriesList series={value}/>
                                                :
                                                <Stack spacing={6} direction="row">
                                                    <KeyValue class="object" pkey={"name"} value={value.name}/>
                                                    <KeyValue class="object" pkey={"slug"} value={value.slug}/>
                                                    <KeyValue class="object" pkey={"id"} value={value.id}/>
                                                </Stack>
                                                }
                                            </Stack>
                                            :
                                            key =='url' ?
                                            <Stack>
                                                <Typography variant="body" className="detail-key">{key} :</Typography>
                                                <Link href={value}>{value}</Link>
                                            </Stack>
                                            :
                                            <Stack>
                                                <Typography variant="body" className="detail-key">{key} :</Typography>
                                                <Typography variant="body2">&nbsp;{value}</Typography>
                                            </Stack>
                                            
                                        )
                                        :''
                                    }
                                    <Divider />
                                </ListItem>        
                            ))}
                            </List>
                        </CardContent>
                        </Card>
                    </Stack>
    }

    return (
        
        <div className="league-details">
            {content}
        </div>  
    );
}

export default LeagueDetails;
