// Import libraries to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

import Header from 'src/components/header';


// Create component
const App = () => {
  return (
    <Header headerText={'Albums'}/> // with headerText we give value to its child component
  );
};


// Render it to the device
AppRegistry.registerComponent('albums', () => App)
