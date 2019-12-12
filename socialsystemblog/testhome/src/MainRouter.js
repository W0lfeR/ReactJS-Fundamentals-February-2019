import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './views/homepage/Homepage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


const MainRouter = () => (
    <div>
        <Switch>
            <Route path="/" component={Homepage}></Route>
        </Switch>
    </div>
)

export default MainRouter