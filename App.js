/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import RestaurantScreen from './src/features/restaurants/screens/restaurant.screen';

const App: () => Node = () => {
  return (
    <PaperProvider>
      <RestaurantScreen />
    </PaperProvider>
  );
};

export default App;
