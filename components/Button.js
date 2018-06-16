import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
 export default class Button extends Component{
  render(){
    console.log('Button is rendered');
    return(
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
      <Text>Click Me </Text>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
});
