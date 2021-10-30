import { CircularProgress, List} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchLeaguesWithPages } from '../../app/leaguesAPI.js';
import Item from './LeagueItem';

import './leagues.css';
import LeaguePagination from './LeaguePagination.js';

function LeaguesList()
{   
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [xTotal, setXTotal] = useState(0);

    async function fetchData(page=1)
    {
        setLoading(true);
        //const data = await fetchLeagues();
        const dataPag = await fetchLeaguesWithPages(page);

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
    }, [page])


    let content;


    if(loading)
    {
        content = <CircularProgress colors="secondary" />
    }else
    {
        content = <List>
                    {
                        list.map((el) => (
                            <Item key={el.id} id={el.id} name={el.name} img={el.image_url}/>
                        ))
                    }
                </List>
    }
    return (
            <div className="leagues-list">
                {content}
                <LeaguePagination xTotal={xTotal} page={page} handleChange={handleChange}/>
            </div>
               
    );
}

export default LeaguesList;