import React from 'react';
import  {Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharactersContainer from './containers/CharactersContainer';
import CardInfoContainer from './containers/CardInfoContainer'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/characters' component={CharactersContainer}/>
            <Route exact path="/info-character/:cardIndex/:name" component={CardInfoContainer}/>
        </Switch>
    )
}
export default Routes;