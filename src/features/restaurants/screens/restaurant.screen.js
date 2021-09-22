import React from 'react';
import {
  SafeAreaView,
  View,
  //StyleSheet,
  //Platform,
  StatusBar,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.components';
import styled from 'styled-components/native';

//const isAndroid = Platform.OS === 'android';
//console.log(StatusBar.currentHeight);

const VistaSafArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight} && 'margin-top: ${StatusBar.currentHeight}px';
`;

const Search = styled(View)`
  padding: 16px;
  background-color: green;
`;

const List = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const RestaurantScreen = () => {
  return (
    <>
      <VistaSafArea>
        <Search>
          <Searchbar placeholder="Search" />
        </Search>
        <List>
          <RestaurantInfoCard />
        </List>
      </VistaSafArea>
    </>
  );
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: isAndroid StatusBar.currentHeight,
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
*/

export default RestaurantScreen;
