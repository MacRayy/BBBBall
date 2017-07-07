import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GameComponent extends React.Component {
    render() {
        return (
            <View>
                <Text>New Game</Text>
                <Button
                    title="Add new player"
                    // onPress={this.addNewPlayer}
                ></Button>
            </View>
        )
    }

    // addNewPlayer() {
    //
    // }
}

// export default GameComponent
