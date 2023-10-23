import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBox from '../../subcomponents/ImageBox';
import TabBarComponent from '../../subcomponents/TabBarComponent';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        <ImageBox></ImageBox>
        <TabBarComponent></TabBarComponent>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
