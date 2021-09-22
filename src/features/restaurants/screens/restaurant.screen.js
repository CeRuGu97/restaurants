import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  //Platform,
  StatusBar,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.components';

//const isAndroid = Platform.OS === 'android';
console.log(StatusBar.currentHeight);

const RestaurantScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: isAndroid ? 0 : StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});

export default RestaurantScreen;
