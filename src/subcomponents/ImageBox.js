import {StyleSheet, Text, View, ScrollView, Image,Dimensions} from 'react-native';
import React, {useState} from 'react';
import Sticker from './minorcomponents/Sticker';
import Content from './minorcomponents/Content';

const ImageBox = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View>
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0}>
 
              <Image
                source={require('../assets/majorImages/cup.png')}
                style={{width:screenWidth,height:250}} ></Image>
         
              <Image
                source={require('../assets/majorImages/cup.png')}
                style={{width:screenWidth,height:250}}></Image>
          
        
        </ScrollView>
        <Sticker />
      </View>
      <Content />
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({

});
