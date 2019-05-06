import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { setup } from './setup';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(setup);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
