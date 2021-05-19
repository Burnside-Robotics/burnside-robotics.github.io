import React from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './home';
import {Login} from './login';
import {Blogs} from './blogs';
import {Error404} from './404';

export const App = () =>
{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={() => <Redirect to='/'/>}/>
                <Route path='/login' component={Login}/>
                <Route path='/blogs' component={Blogs}/>
                <Route path='/404' component={Error404}/>
                <Redirect to='/404'/>
            </Switch>
        </Router>
    );
}