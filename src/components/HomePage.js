import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function HomePage(props)
{
    return (
        <>
            <Button component={Link} to={'/leagues'} size="large" variant="outlined">Go To Leagues</Button>
            <Button component={Link} to={'/teams'} size="large" variant="outlined">Go To Teams</Button>
        </>
        );
}

export default HomePage;