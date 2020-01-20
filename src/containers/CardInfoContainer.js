import React, { Component } from 'react'
import CardDescription from '../components/cardDescription'


class CardInfoContainer extends Component {
    componentDidMount(){
        //peticion con axios para obtener info
    }


    render(){
        const { match }= this.props;
        let url ="https://rickandmortyapi.com/api/character/avatar/"
        const rmId = match.params.cardIndex;
        const name = match.params.name;
        return(
            <>
              <CardDescription name={name} cardImg={`${url}${rmId}.jpeg`} />
              
            </>
        )
    }
}
export default CardInfoContainer;