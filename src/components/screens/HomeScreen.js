import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBox from '../../subcomponents/ImageBox';
import TabBarComponent from '../../subcomponents/TabBarComponent';
import PillsburyComponent from '../../subcomponents/PillsburyComponent';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
      <View style={{flex:1}}>
        <ImageBox></ImageBox>
        <TabBarComponent></TabBarComponent>
        <PillsburyComponent></PillsburyComponent>
      </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
