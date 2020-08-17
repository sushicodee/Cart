import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';

import React from 'react'
import { createBrowserHistory } from 'history';
import DrinkList from '../DrinksList/DrinkList';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Routes = () => {
    const history = createBrowserHistory;
    return (
        <>
        <Router history = {history}>
        <Header/>
        <Switch>
            <Route path ='/cart' component = {Cart}/>
            <Route path ='/' component = {DrinkList}/>
        </Switch>
        </Router>
        </>
    )
}

export default Routes
