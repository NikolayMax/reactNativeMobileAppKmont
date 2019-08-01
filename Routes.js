import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux';
import Home from './views/Home.js'
import About from './views/About.js'

const Routes = () => {
    return (
        <Router>
            <Scene key = "root">
                <Scene key = "home" component = {Home} hideNavBar={true}/>
                <Scene key = "about" component = {About} hideNavBar={true} initial = {true}  />
            </Scene>
        </Router>
    )
}
export default Routes;
