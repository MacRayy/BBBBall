import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomeComponent from './home';
import GameComponent from './game';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene 
                    key="home" 
                    component={HomeComponent} 
                    title="Home" 
                />
                <Scene
                    key="game"
                    component={GameComponent}
                    title="New Game"
                />
            </Scene>
        </Router>
    );
}

export default RouterComponent;
