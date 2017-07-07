import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './albumDetail'

// Class based component, for complex components
class AlbumList extends Component {
    //default state for the component, when its created
    //state is built in concept and setState below, as well
    state = { albums: [] };

    // Will automatically be executed when component get rendered
    componentWillMount() {
        // Http request(axios)
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // Update state with the response, setState re-renders the component
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <Text key={album.title}>{album.title}</Text>
        );
    } 

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;  