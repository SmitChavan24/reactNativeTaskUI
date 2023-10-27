import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions';

const ImageComment = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{flex:1,alignItems: 'center'}}>
      <View style={{marginLeft: responsiveWidth(0.2)}}>
        <Image
          source={require('../../assets/majorImages/bournvita.png')}
          style={[{width: responsiveWidth(98)}, styles.mainImage]}
          resizeMode="contain"></Image>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/majorImages/likeimg.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/majorImages/comment.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/majorImages/share.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ImageComment;

const styles = StyleSheet.create({
  mainImage: {
    height: responsiveHeight(50),
  },
  likeImage: {
    marginRight: 15,
  },
  buttoncontainer: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(2)
  },
});
