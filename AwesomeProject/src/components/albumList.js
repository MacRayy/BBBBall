import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Class based component, for complex components
class AlbumList extends Component {
    // Will automatically be executed when component get rendered
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
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