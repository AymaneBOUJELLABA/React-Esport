import { CircularProgress, Card, CardContent, CardHeader, CardMedia, List, ListItem, Stack, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchTeambyId } from '../../app/teamsAPI';
import KeyValue from '../KeyValue';
import PlayersList from './PlayersList';

function TeamDetails(props)
{
    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(false);
    let { id } = useParams();

    async function getTeam(id)
    {
        setLoading(true);
        const data = await fetchTeambyId(id);

        setTeam(data);
        setLoading(false);
    }

    useEffect(() =>
    {
        getTeam(id);
    }, [])

    let content;

    if(loading)
    {
        content = <CircularProgress colors="secondary" />

    }else
    {
        console.log(team)
        content =   <Stack direction="row">
                        <Card sx={{maxWidth:500}}>
                            <CardHeader title={"id : "+id}/>
                            <CardMedia component="img"
                                        height="auto"
                                        image={team.image_url}
                                        alt={team.name + ' image'}
                                />
                        </Card>
                        <Card>
                        <CardContent>
                            <List component="dl">
                            {Object.entries(team).map(([key,value]) => (
                                <ListItem key={key}>
                                    {typeof(value)=='object'?
                                        <Stack>
                                                <Typography variant="body" className="detail-key">{key} :</Typography>
                                                {key=='players'?
                                                    <PlayersList players={value} />
                                                :
                                                    key=='current_videogame' ? value.slug : ''
                                                }
                                        </Stack>
                                        :
                                        value? <KeyValue pkey={key} value={value} />: <KeyValue pkey={key} value={'none'} />
                                    }
                                </ListItem>        
                            ))}
                            </List>
                        </CardContent>
                        </Card>
                    </Stack>
    }

    return (
        
        <div className="team-details">
            {content}
        </div>  
    );
}

export default TeamDetails;