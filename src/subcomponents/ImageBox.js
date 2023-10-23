import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React,{ useState } from 'react';
import Sticker from './minorcomponents/Sticker';
import Content from './minorcomponents/Content';

const ImageBox = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={0}>
        <View style={styles.scrollViewContent}>
          <Image
            source={require('../assets/majorImages/cup.png')}
            style={styles.image}></Image>
         <Sticker />
        </View>
        <View style={styles.scrollViewContent}>
          <Image
            source={require('../assets/majorImages/cup.png')}
            style={styles.image}></Image>
          <Sticker />
        </View>
      </ScrollView>
      <Content />
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 392,
  },
  scrollViewContent: {
    alignItems: 'center', // Center content within the ScrollView
  }
});
