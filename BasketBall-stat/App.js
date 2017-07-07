import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Navigator,  } from 'react-native';
import { NewGame } from './App/new-game/newGame';
import { Navigation } from './App/navigator';

export default class App extends React.Component {
    constructor(props) {
       super(props);
    }

    navNewGame() {
        this.props.navigator.push({
            id: 'NewGame'
        });
        // console.log(this.props);
    }

   render() {
       return (
        //    <View style={styles.container}>
        //        <Text>Kosárlabda statisztika app</Text>
        //    </View>
           <TouchableHighlight style={styles.container}
                onPress={this.navNewGame().bind(this)}
            >
                <View style={styles.container}>
                    <Text>Új mérközés létrehozása</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
