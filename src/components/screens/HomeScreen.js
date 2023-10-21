import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBox from '../../subcomponents/ImageBox';

const HomeScreen = () => {
  return (
    <View >
    <ScrollView>
     <ImageBox></ImageBox>
    </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
  }
});
