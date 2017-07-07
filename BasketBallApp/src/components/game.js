import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';

export default class GameComponent extends React.Component {
    constructor(props) {
        super(props);
        state = {
            name: '',
            number: ''
        }
    }

    render() {
        return (
            <View>
                <Text>New Player</Text>
                <TextInput
                    onChangeText={(name) => this.setState({name})}
                    placeholder="Name"
                    />
                <TextInput
                    onChangeText={(number) => this.setState({number})}
                    placeholder="Number"
                    />
                {/*<Text>
                    {this.state.name}
                </Text>*/}
                <Button
                    title="Add new player"
                    onPress={this.addNewPlayer.bind(this)}
                ></Button>
            </View>
        )
    }

    listPlayers() {
        axios.get('https://nickel-pheasant.glitch.me/players')
        .then (function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    addNewPlayer() {
        axios.post('https://nickel-pheasant.glitch.me/player', {
            name: this.state.name,
            number: this.state.number
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
