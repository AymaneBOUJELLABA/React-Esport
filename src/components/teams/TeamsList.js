import { CircularProgress, Stack} from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { VideoGameContext } from '../../App.js';
import { fetchTeamsWithPages } from '../../app/teamsAPI.js';
import PagePagination from '../PagePagination.js';
import TeamItem from './TeamItem';

function TeamsList()
{   
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [xTotal, setXTotal] = useState(0);

    const {currentGame} = useContext(VideoGameContext)

    const handleChange = (event, value) =>
    {
        setPage(value);
    };

    useEffect(() =>
    {
        async function fetchData()
        {
            setLoading(true);
            //const data = await fetchTeams();
            const dataPag = await fetchTeamsWithPages(currentGame,page);
            //définir le nombre total des éléments
            setXTotal(Math.ceil(dataPag.xtotal/5));

            //si fetchTeams terminé
            setList(dataPag.json);
            setLoading(false);
        }

        fetchData();
    }, [page,currentGame])


    let content;


    if(loading)
    {
        content = <CircularProgress colors="secondary" />
    }else
    {
        content = <Stack spacing={2} sx={{display:'flex',alignItems: 'center'}}>
                    {
                        list.map((el) => (
                            <TeamItem key={el.id} id={el.id} name={el.name} img={el.image_url}/>
                        ))
                    }
                </Stack>
    }
    return (
            <div className="teams-list">
                {content}
                <PagePagination xTotal={xTotal} page={page} handleChange={handleChange}/>
            </div>
               
    );
}

export default TeamsList;