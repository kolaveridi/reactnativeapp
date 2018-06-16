import React ,{Component} from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
class AlbumDetail extends  Component{
   render(){
     return(
       <Card>
       <View>
       <Image  style={styles.thumbnailStyle} source={{uri:this.props.album.thumbnail_image}}/>
       </View>
       <View style={styles.stylingview}>
       <Text>{this.props.album.title}</Text>
       <Text>{this.props.album.artist}</Text>
       </View>
       <Image style={styles.imageStyle} source={{uri:this.props.album.image}}/>
       <Button onPress={()=> Linking.openURL(this.props.album.url)} />
       </Card>

     );
   }
}
const styles = {
  stylingview: {
    flexDirection:'column',
    justifyContent:'space-around'
  },
  thumbnailStyle: {
    height:50,
    width:50,
  },
  imageStyle: {
    height:300,
    flex:1,
    width:null
  },
};
export default AlbumDetail;
