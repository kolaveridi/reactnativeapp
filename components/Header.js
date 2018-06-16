import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header =(props)=> {
  return <Text style={styles.textStyle}>{props.headerText}</Text>
};
const styles = StyleSheet.create({

  textStyle:{
     fontSize:10,
     justifyContent:'center',
     alignItems: 'center',
     height:60
  },
});
export default Header;
