import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class NewGame extends React.Component {
    _onPressButton() {
        this.props.navigator.push({
            id: 'NewGame'
        });
    }

   render() {
       return (
           <View style={styles.container}>
                <Text>NEW GAME</Text>
           </View>
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
