import React from 'react';
import { View, Button, Text, Modal, Image, StyleSheet } from 'react-native';


const placeDetails = (props) => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onPlaceDeleted} />
                    <Button title="Close" onPress={props.onCloseModal} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    }
});

export default placeDetails;