import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.childres}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderColor: 'red'
    }
}

export default Card;