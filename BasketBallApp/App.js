import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Basketball App</Text>
                <Button
                    onPress={() => Actions.game()}
                    title="New Game">
                </Button>
            </View>
        );
    }

    // navigation() {
        // Actions.RouterComponent()
        // console.log(RouterComponent);
    // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
