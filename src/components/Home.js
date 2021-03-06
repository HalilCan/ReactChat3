import React from 'react';
import * as firebase from 'firebase';


import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux'

class Home extends React.Component {
    state = {
        name : '',
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style = {styles.title}>
                    Enter your name:
                </Text>
                <TextInput
                    style = {styles.nameInput}
                    placeholder='John Snow'
                    onChangeText={(text) => {
                        this.setState({
                            name: text,
                        });
                    }}
                    value = {this.state.name}
                />
                <TouchableOpacity
                    onPress={() => {
                        // navigate to the second screen and pass it the name
                        console.log(this.state.name);
                        // console.log the correct name
                        // debugger;
                        Actions.chat({
                            name: this.state.name,
                        });
                    }}
                >
                    <Text style = {styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    buttonText: {
        marginLeft: 20,
        marginRight: 20,
    },
    container: {
        flex:1,
    }
});

export default Home;