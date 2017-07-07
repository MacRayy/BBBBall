// Import libraries to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/albumList';


// Create component
const App = () => {
  return (
    <View>
      <Header headerText={'Albums'}/> // with headerText we give value to its child component
      <AlbumList />
    </View>
  );
};


// Render it to the device
// AppRegistry.registerComponent('albums', () => App)
