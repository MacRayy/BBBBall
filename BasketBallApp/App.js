import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import GameComponent from './src/components/game'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <GameComponent/>
                {/* <Text>Basketball App</Text>
                <Button
                    onPress={() => this.navigation()}
                    title="New Game">
                </Button> */}
            </View>
        );
    }

    // navigation() {
        // Actions.game
        // console.log(Actions);
    // }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
