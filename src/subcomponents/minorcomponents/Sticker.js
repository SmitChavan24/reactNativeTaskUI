import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Sticker = () => {
  return (
    <View style={styles.circlecontainer}>
      <View style={styles.largeCircle}>
        <Image
          source={require('../../assets/majorImages/pillsbury.png')}
          style={styles.circleimage}></Image>
      </View>
    </View>
  );
};

export default Sticker;

const styles = StyleSheet.create({
  circlecontainer: {
    position: 'absolute',
    top: 245,
    marginLeft: 150,
  },
  largeCircle: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    backgroundColor: 'white',
    borderRadius: 100, // Half of the width and height for a perfect circle
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 25,
    left: 130,
  },
  circleimage: {
    width: 80, // Adjust the size as needed
    height: 80, // Adjust the size as needed
    borderRadius: 40, // Half of the width and height for a perfect circle
  },
});
