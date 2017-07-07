import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.childres}
        </View>
    );
};

const style = {
    containerStyle: {
        borderBottomWidth: 1
    }
}

export default CardSection;