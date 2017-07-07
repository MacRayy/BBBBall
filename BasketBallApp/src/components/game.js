import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';

export default class GameComponent extends React.Component {
    render() {
        return (
            <View>
                <Text>New Player</Text>
                <TextInput
                    placeholder="Name"
                    />
                <TextInput
                    placeholder="Number"
                    />
                <Button
                    title="Add new player"
                    onPress={this.addNewPlayer}
                ></Button>
            </View>
        )
    }

    addNewPlayer() {
        axios.post('https://nickel-pheasant.glitch.me/player', {
            name: 'Sanya',
            number: 12
        })
        .then (function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    // addNewPlayer() {
    //
    // }
}

// export default GameComponent
