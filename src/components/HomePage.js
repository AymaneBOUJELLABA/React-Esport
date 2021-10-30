import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function HomePage(props)
{
    return (
        <Button component={Link} to={'/leagues'} size="large" variant="outlined">Go To Leagues</Button>
    );
}

export default HomePage;