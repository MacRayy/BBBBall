import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import RouterComponent from './src/components/routing';

export default class App extends React.Component {
    render() {
        return (
            <RouterComponent />
        );
    }
}
//     render() {
//         return (
//             <View style={styles.container}>
//                 <GameComponent/>
//                 {/* <Text>Basketball App</Text>
//                 <Button
//                     onPress={() => this.navigation()}
//                     title="New Game">
//                 </Button> */}
//             </View>
//         );
//     }

//     // navigation() {
//         // Actions.game
//         // console.log(Actions);
//     // }
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start'
//   },
// });
