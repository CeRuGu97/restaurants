import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';

const RestaurantInfo = ({restaurant = {}}) => {
  const {
    name = 'some nice restaurants',
    icon = 'icon',
    photos = ['link de la foto'],
    address = 'some random street',
    isOpenNow = true,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <Card>
        <Card.Cover elevation={5} source={{uri: photos[0]}} />
        <Text>{name}</Text>
      </Card>
    </>
  );
};
/*
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
  },
});
*/
export default RestaurantInfo;
