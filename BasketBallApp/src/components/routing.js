import React from 'react';
import { Scene, Router } from 'react-native-router-flux'

import GameComponent from './game'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="game"
                    component={GameComponent}
                    title="New Game"
                    initial={true}
                />
            </Scene>
        </Router>
    );
}

export default RouterComponent;
