//Firstly: npm install --save react-native-router-flux@3.35.0

/* Router.js - ezt importalni kell az app.js-be is, es ott a returnbe is beadni
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import { HomePage} from './homepage';
import { NavigateTo } from './navigateto';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="login" component={HomeComponent} title="Please Login" initial /> az initialt mutatja alapbol, ha nincs akkor az elsot mutatja alapbol
            <Screne key="navigateto" component={NavigateTo} title="Employees" /> 
        </Router>
    )
};
  
export default RouterComponent;


NavigateTo.js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NavigateTo extends Component {
    render() {
        return (
            <View>
            <Text>Muxik</Text>
            </View>
        )
    }
}

export default NavigateTo;


Ahol a navigalo gomb van:
import { Actions } from 'react-native-router-flux';

function a gombnyomason = () => {
    Actions.NavigateTo();
}
*/