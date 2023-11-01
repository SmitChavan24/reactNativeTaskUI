import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBox from '../../subcomponents/ImageBox';
import TabBarComponent from '../../subcomponents/TabBarComponent';
import PillsburyComponent from '../../subcomponents/PillsburyComponent';
import UserComponent from '../../subcomponents/UserComponent';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{display:'flex', flexDirection:'column',alignItems:'center '}}>
      <UserComponent></UserComponent>
        <ImageBox></ImageBox>
        <TabBarComponent></TabBarComponent>
        <PillsburyComponent></PillsburyComponent>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
