import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const ImageComment = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{alignItems:'center'}}>
      <Image
        source={require('../../assets/majorImages/bournvita.png')}
        style={[{width: screenWidth-1}, styles.mainImage]}
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
  );
};

export default ImageComment;

const styles = StyleSheet.create({
  mainImage: {
    height: 400,
  },
  likeImage: {
    marginRight: 15,
  },
  buttoncontainer: {
    marginLeft: 15,
    flexDirection: 'row',
  },
});
