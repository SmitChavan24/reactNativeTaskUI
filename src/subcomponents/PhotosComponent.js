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
    flexDirection: 'column',
  },
});
