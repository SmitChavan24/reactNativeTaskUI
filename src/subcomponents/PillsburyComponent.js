import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PillsburyComponent = () => {
  return (
    // <View
    //   style={{
    //     bottom: 80,
    //     width: 385,
    //     height: 700,
    //     backgroundColor: '#194993',
    //     marginTop: 5,
    //     marginLeft: 4,
    //   }}>
    <View
  style={{
    width: 385,
      height: 700, // Increase the height to make content larger
      backgroundColor: '#194993',
      marginTop: 5,
      marginLeft: 4,
  }}
>
      <Text>PillsburyComponent</Text>
    </View>
  );
};

export default PillsburyComponent;

const styles = StyleSheet.create({});
