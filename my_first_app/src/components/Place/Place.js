import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const place = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputPlace}
            value={props.placeName}
            onChangeText={props.placeNameChanged} />
        <Button
            title="Add"
            style={styles.buttonPlace} onPress={props.placeSubmited} />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputPlace: {
        width: '70%'
    },
    buttonPlace: {
        width: '30%'
    }
});

export default place;