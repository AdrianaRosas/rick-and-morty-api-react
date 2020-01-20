import React from 'react';
import '../App.css';
import Port from '../img/rm.jpg';
import {Link} from 'react-router-dom'

const  Home = () => {
        return (

            <div className="App">
            <header className="App-header">
              <div>
              <img src={Port} width='800' alt='dr'/>
              <h1>Characters</h1>
              <Link to='/characters'>All Characters</Link>
              </div>
            </header>
          </div>
        );
}
export default Home;