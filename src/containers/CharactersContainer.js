import React, {Component} from 'react';
import List from '../components/List';
import AppNav from '../components/NavBar'
import axios from 'axios';

//Componente para hacer la peticion API

class CharactersContainer extends Component {
      state = {
          planetsData : []
      }

    componentDidMount(){
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
          const planetsData = res.data.results;
          this.setState({
              planetsData: planetsData
          })

      })
      .catch(error => {
          console.log(error);
      })
    }
    render() {
        const {planetsData} = this.state;
        return (
            <>
            <AppNav/>
            <List planetsdata ={planetsData} />
            </>
        )
    }
}
export default CharactersContainer;