import React ,{Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';

import AlbumList from './components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Header headerText={'albums'} />
         <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
     fontSize: 10,
  },
});
