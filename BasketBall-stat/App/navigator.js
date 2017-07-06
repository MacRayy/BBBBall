import React from 'react';
import { Navigator } from 'react-native';

class Navigation extends React.Component {
    react() {
        return (
            <navigator
                initialRoute=\{\{id: 'NewGame'}}
        renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'newGame':
                return (<First navigator={navigator} title="newGame"/>);
        }
    }
}
