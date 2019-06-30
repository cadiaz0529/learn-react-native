import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Place from './src/components/Place/Place';
import ListItems from './src/components/ListItems/ListItems';
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails';

export default class App extends Component  {

    state = {
        placeName: '',
        places: [],
        selectedPlace: null
    };

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        })
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.setState((prevState) => {
            return {
                places: prevState.places.concat({
                    key: Math.random().toString(),
                    name: prevState.placeName,
                    image: {
                      uri: 'https://www.nepa.gov.jm/new/services_products/subsites/beach_guide/images/beach/Manchioneal/IMG_7183_sm.jpg'
                    }
                })
            }
        });
    };

    placeDeletedHandler = () => {
        this.setState((prevState) => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            };
        });
    };a

    placeSelectedHandler = key => {
      this.setState((prevState) => {
        return {
          selectedPlace: prevState.places.find(place => {
            return place.key === key;
          })
        };
      });
    };

    closeModalHandler = () => {
      this.setState({
          selectedPlace: null
      });
    };

    render () {
        return (
            <View style={styles.container}>
                <PlaceDetails
                    selectedPlace={this.state.selectedPlace}
                    onCloseModal={this.closeModalHandler}
                    onPlaceDeleted={this.placeDeletedHandler}
                />
                <Place
                    placeName={this.state.placeName}
                    placeNameChanged={this.placeNameChangedHandler}
                    placeSubmited={this.placeSubmitHandler}/>
                <ListItems
                    places={this.state.places}
                    onPlaceSelected={this.placeSelectedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});
