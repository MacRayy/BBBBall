import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Class based component, for complex components
class AlbumList extends Component {
    // Will automatically be executed when component get rendered
    componentWillMount() {
        console.log()
    } 

    render() {
        return (
            <View>
                <Text>Album List!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;  