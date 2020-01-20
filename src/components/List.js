import React, {Fragment} from 'react';
import Cards from '../components/Card'
import { Grid } from '@material-ui/core'


function List({planetsdata}) {
    return (
       <Fragment>
        <h1>All Characters</h1>
        <Grid container spacing={20} justify="center">
            {planetsdata.map((planet, index) => {
                let url ="https://rickandmortyapi.com/api/character/avatar/"
                let cardIndex = planet.url.split('/')[planet.url.split('/').length -1]
                // console.log(cardIndex)
                // console.log(planet.url)
                return <Cards to={`/info-character/${cardIndex}/${planet.name}`}name={planet.name} image={`${url}${cardIndex}.jpeg`} />
            })}
        </Grid>
        </Fragment>
    );
}

export default List;