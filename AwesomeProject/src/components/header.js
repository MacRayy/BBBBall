// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
//View: to position and style elements
// Make a component
const Header = () => {
    const { textStyle } = styles;

    return (
        <View style={styles.viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export default Header;