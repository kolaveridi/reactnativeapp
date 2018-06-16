import React, { Component } from 'react';
import {StyleSheet, TextInput, View } from 'react-native';
export default class TextArea extends React.Component{
  state={
    text:''
  }
  render(){
    return(
      <TextInput
       style={styles.container}
       multiline = {true}
       onChangeText={(text) => this.setState({text})}
       value={this.state.text}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:200,
    width:300,
  },
  =
});
