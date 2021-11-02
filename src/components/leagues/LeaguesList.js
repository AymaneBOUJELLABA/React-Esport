import { CircularProgress, Stack} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { fetchLeaguesWithPages } from '../../app/leaguesAPI.js';
import LeagueItem from './LeagueItem';

import './leagues.css';
import PagePagination from '../PagePagination.js';
import { VideoGameContext } from '../../App.js';

function LeaguesList()
{   
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [xTotal, setXTotal] = useState(0);

    const {currentGame} = useContext(VideoGameContext)

    async function fetchData(page=1)
    {
        setLoading(true);
        //const data = await fetchLeagues();
        const dataPag = await fetchLeaguesWithPages(currentGame,page);

        //définir le nombre total des éléments
        setXTotal(Math.ceil(dataPag.xtotal/5));

        //si fetchLeagues terminé
        setList(dataPag.json);
        setLoading(false);
    }

    const handleChange = (event, value) =>
    {
        setPage(value);
    };

    useEffect(() =>
    {
        fetchData(page);
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
                            <LeagueItem key={el.id} id={el.id} name={el.name} img={el.image_url}/>
                        ))
                    }
                </Stack>
    }
    return (
            <div className="leagues-list">
                {content}
                <PagePagination xTotal={xTotal} page={page} handleChange={handleChange}/>
            </div>
               
    );
}

export default LeaguesList;
