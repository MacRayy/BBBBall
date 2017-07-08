import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Text>Basketball App</Text>
          <Button
               onPress={() => Actions.game() }
               title="New Game">
          </Button>
      </View>
    );
  }
}