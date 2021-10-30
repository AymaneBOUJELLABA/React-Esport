import { CircularProgress, Card, CardContent, CardHeader } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchLeaguebyId } from '../../app/leaguesAPI';

function LeagueDetails(props)
{
    const [league, setLeague] = useState();
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
        console.log(league)
        content =   <Card>
                        <CardHeader title={"id : "+id}/>
                        <CardContent>
                        </CardContent>
                    </Card>
    }

    return (
        
        <div className="league-details">
            {content}
        </div>  
    );
}

export default LeagueDetails;