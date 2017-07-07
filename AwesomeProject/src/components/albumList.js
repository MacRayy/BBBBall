import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Class based component, for complex components
class AlbumList extends Component {
    //default state for the component, when its created
    //state is built in and setState below, as well
    state = { albums: [] };

    // Will automatically be executed when component get rendered
    componentWillMount() {
        // Http request(axios)
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
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