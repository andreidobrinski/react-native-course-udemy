// Import library to create the Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a Component
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
