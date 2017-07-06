import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Navigator,  } from 'react-native';
import { NewGame } from './App/new-game/newGame'

export default class App extends React.Component {
    navNewGame() {
        // this.props.navigator.push({
        //     id: 'NewGame'
        // });
        console.log(this.props.navigation);
    }

   render() {
       return (
        //    <View style={styles.container}>
        //        <Text>Kosárlabda statisztika app</Text>
        //    </View>
           <TouchableHighlight style={styles.container}
                onPress={this.navNewGame.bind(this)}
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
