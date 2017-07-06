// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
//View: to position and style elements
// Make a component
const Header = (props) => {
    const { textStyle } = styles;

    return (
        <View style={styles.viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15,
        shadowColor: 'green',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export default Header;