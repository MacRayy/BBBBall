import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native';
import axios from 'axios';

export default class GameComponent extends React.Component {
    constructor(props) {
        super(props);
        state = {
            name: '',
            number: ''
        }
        playerList = []
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.navbar}>BASKETBALL STAT</Text>
                <TextInput
                    onChangeText={(name) => this.setState({name})}
                    placeholder="Name"
                    style={styles.input}
                    />
                <TextInput
                    onChangeText={(number) => this.setState({number})}
                    placeholder="Number"
                    style={styles.input}
                    />
                <View style={styles.button}>
                    <Button
                        title="Add new player"

                        onPress={this.addNewPlayer.bind(this)}
                    ></Button>
                </View>
                <Text style={styles.teamTitle}>Team Members</Text>
                <FlatList
                    data={this.playerList}
                    renderItem={({item}) =>
                    <Text style={styles.listItems}>{item.number} - {item.name}</Text>}
                    style={styles.list}
                />
            </View>
        )
    }

    listPlayers() {
        axios.get('https://nickel-pheasant.glitch.me/players')
        .then (function (response) {
            this.playerList = response.data;
        }.bind(this))
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
            this.listPlayers()
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20
    },
    view: {
    },
    navbar: {
        textAlign: 'center',
        padding: 10,
        paddingTop: 20,
        backgroundColor: 'orange',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        padding: 20,
        fontSize: 16
    },
    button: {
        marginLeft: 75,
        width: 100
    },
    list: {
        flex: 1,
        padding: 10,
        marginTop: 10,
        width: 250
    },
    listItems: {
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#cccccc'

    },
    teamTitle: {
        paddingTop: 15,
        fontSize: 20,
        textAlign: 'center',
    }
})
