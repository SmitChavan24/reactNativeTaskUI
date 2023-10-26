import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const HeaderComponent = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View>
      <View style={[styles.container, {flexDirection: 'row'}]}>
        <View style={{flexDirection: 'row',left:10}}>
          <Image
            source={require('../../assets/majorImages/pillsbury.png')}
            style={styles.circleimage}></Image>
          <View style={{marginTop:14, marginLeft: 5}}>
            <Text style={styles.text}>Pillsbury</Text>
            <Text style={{color: 'black'}}>Feb 21 9:00 AM</Text>
          </View>
        </View>
        <View style={styles.dotmargin}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/majorImages/dots.png')}
              style={styles.dots}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'space-between',
  },
  circleimage: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginRight: 5,
  },
  text: {
    fontFamily: 'serif',
    color: 'black',
    fontSize: 15,
  },
  dots: {
    height: 32,
    width: 10,
    right:20
  },
  dotmargin: {
    marginLeft: 190,
    marginTop: 20,
  },
  mainImage: {
    height: 400,
  },
  likeImage: {
    marginRight: 15,
  },
  buttoncontainer: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
  },
});
