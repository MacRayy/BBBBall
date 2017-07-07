import React from 'react';
import { Scene, Router } from 'react-native-router-flux'

import GameComponent from './game'

export default class RouterComponent extends React.Component {
    render() {
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
}
