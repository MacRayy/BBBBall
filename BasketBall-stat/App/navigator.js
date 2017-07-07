import React from 'react';
import { Navigator } from 'react-native';

export default class Navigation extends React.Component {
    constructor(props) {
       super(props);
    }

    <Navigator
        initialRoute={{ id: 'NewGame' }}
        renderScene={ this.renderScene } >
    </Navigator>

    renderScene(route, navigator) {
        if(route.id == 'NewGame') {
            return <NewGame navigator={navigator} />
        }
    },
}
