import React from 'react';
import { Pagination, Stack } from "@mui/material";

import './leagues.css'

function LeaguePagination(props)
{
    return ( 
        <div className="pagination">
            <Stack spacing={2}>
                <Pagination count={props.xTotal} 
                            page={props.page} 
                            onChange={props.handleChange} 
                            color="secondary"
                            size="large"
                            showFirstButton showLastButton/>
            </Stack>
        </div>
     );
}

export default LeaguePagination;