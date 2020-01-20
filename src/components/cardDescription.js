import React from 'react';
import Cards from '../components/Card'
import Grid from '@material-ui/core/Grid'

function CardDescription ({cardImg, name}) {
    return(
        <Grid container>
            <Cards image={cardImg} name={name}/>
        </Grid>
        // <img src={cardImg} alt="character" />
    );
}
export default CardDescription;