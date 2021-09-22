import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';

const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'some nice restaurants',
    //icon = 'icon',
    photos = [
      'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg',
    ],
    //address = 'some random street',
    //isOpenNow = true,
    //rating,
    //isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <Card style={styles.card}>
        <Card.Cover
          style={styles.cover}
          elevation={5}
          source={{uri: photos[0]}}
        />
        <Text style={styles.title}>{name}</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    padding: 16,
  },
});

export default RestaurantInfoCard;
