import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import EndComponent from './minorcomponents/EndComponent';
import ImageComment from './minorcomponents/ImageComment';
import HeaderComponent from './minorcomponents/HeaderComponent';

const PhotosComponent = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
    <HeaderComponent></HeaderComponent>
    <ImageComment></ImageComment>
    <EndComponent></EndComponent>

    </View>
  );
};

export default PhotosComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  circleimage: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginRight: 5,
  },
  text: {
    fontFamily: 'serif',
    color: 'black',
    fontSize: 15,
  },
  dots: {
    height: 32,
    width: 10,
  },
  dotmargin: {
    marginLeft: 190,
    marginTop: 20,
  },
  mainImage: {
    height: 400,
  },
  likeImage: {
    marginRight: 15,
  },
  buttoncontainer: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
  },
});
