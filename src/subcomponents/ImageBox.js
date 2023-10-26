import {StyleSheet, Text, View, ScrollView, Image,Dimensions} from 'react-native';
import React, {useState} from 'react';
import Sticker from './minorcomponents/Sticker';
import Content from './minorcomponents/Content';

const ImageBox = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0}>
       
            <View style={{bottom:3 }}>
              <Image
                source={require('../assets/majorImages/cup.png')}
                style={styles.image} ></Image>
            </View>
            <View style={{ bottom:3 }}>
              <Image
                source={require('../assets/majorImages/cup.png')}
                style={styles.image}></Image>
            </View>
        
        </ScrollView>
        <Sticker />
      </View>
      <Content />
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  container: {},
  imagecontainer: {
    
  },image:{
    flex: 1,
    width:394
  }
});
