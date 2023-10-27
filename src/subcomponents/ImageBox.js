import {StyleSheet, Text, View, ScrollView, Image,Dimensions} from 'react-native';
import React, {useState} from 'react';
import Sticker from './minorcomponents/Sticker';
import Content from './minorcomponents/Content';
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions';
const ImageBox = () => {

  return (
    <View>
      <View style={{alignItems:'center'}}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0}>
 
              <Image
                source={require('../assets/majorImages/cup.png')}
                style={{width:responsiveWidth(100),height:responsiveHeight(30)}} ></Image>
         
              <Image
                source={require('../assets/majorImages/cup.png')}
                style={{width:responsiveWidth(100),height:responsiveHeight(30)}}></Image>
          
        
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
