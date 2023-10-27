import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions';
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
    marginTop:responsiveHeight(30)
  },
  largeCircle: {
    width: responsiveWidth(23), // Adjust the size as needed
    height: responsiveWidth(23), // Adjust the size as needed
    backgroundColor: 'white',
    borderRadius: responsiveWidth(23), // Half of the width and height for a perfect circle
    alignItems: 'center',
    justifyContent: 'center',
    bottom: responsiveHeight(3),
    marginLeft:responsiveWidth(70)
  },
  circleimage: {
    width: responsiveWidth(18), // Adjust the size as needed
    height: responsiveWidth(18), // Adjust the size as needed
    borderRadius: responsiveWidth(18), // Half of the width and height for a perfect circle
  },
});
